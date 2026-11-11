// @vitest-environment node
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import type { NextRequest } from 'next/server'

const ENV_KEYS = [
  'BREVO_API_KEY',
  'BREVO_LIST_ID',
  'BREVO_DOI_TEMPLATE_ID',
  'BREVO_DOI_TEMPLATE_ID_FR',
  'BREVO_DOI_TEMPLATE_ID_AR',
  'BREVO_DOI_TEMPLATE_ID_EN',
  'TURNSTILE_SECRET_KEY',
] as const

let ipCounter = 0
const savedEnv: Record<string, string | undefined> = {}
let fetchMock: ReturnType<typeof vi.fn>

/** La route lit BREVO_API_KEY au chargement : on la recharge après avoir posé l'env. */
async function loadRoute(env: Partial<Record<(typeof ENV_KEYS)[number], string>>) {
  for (const key of ENV_KEYS) delete process.env[key]
  Object.assign(process.env, { BREVO_API_KEY: 'test-key', BREVO_LIST_ID: '2', ...env })
  vi.resetModules()
  return import('@/app/api/newsletter/route')
}

function post(body: unknown): NextRequest {
  ipCounter += 1 // une IP par requête : la limite de 3/min ne doit pas interférer
  return new Request('https://www.tahalearn.com/api/newsletter', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': `10.0.0.${ipCounter}` },
    body: JSON.stringify(body),
  }) as unknown as NextRequest
}

function brevoCall(index = 0) {
  const [url, init] = fetchMock.mock.calls[index] as [string, RequestInit]
  return { url, body: JSON.parse(init.body as string) }
}

beforeEach(() => {
  for (const key of ENV_KEYS) savedEnv[key] = process.env[key]
  fetchMock = vi.fn(async () => new Response('{}', { status: 201 }))
  vi.stubGlobal('fetch', fetchMock)
})

afterEach(() => {
  vi.unstubAllGlobals()
  for (const key of ENV_KEYS) {
    if (savedEnv[key] === undefined) delete process.env[key]
    else process.env[key] = savedEnv[key]
  }
})

describe('newsletter — double confirmation', () => {
  it('passe par le double opt-in Brevo quand un modèle est configuré', async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12' })
    const res = await POST(post({ email: 'lecteur@example.org', locale: 'fr' }))

    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ success: true, mode: 'doi', pending: true })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const { url, body } = brevoCall()
    expect(url).toBe('https://api.brevo.com/v3/contacts/doubleOptinConfirmation')
    expect(body).toMatchObject({
      email: 'lecteur@example.org',
      includeListIds: [2],
      templateId: 12,
      redirectionUrl: 'https://www.tahalearn.com/fr/newsletter/confirmee',
      attributes: { SOURCE: 'website_newsletter', LANGUE: 'fr' },
    })
  })

  it('utilise le modèle de la langue quand il existe, sinon le modèle par défaut', async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12', BREVO_DOI_TEMPLATE_ID_AR: '13' })

    await POST(post({ email: 'a@example.org', locale: 'ar' }))
    await POST(post({ email: 'b@example.org', locale: 'en' }))

    expect(brevoCall(0).body.templateId).toBe(13)
    expect(brevoCall(0).body.redirectionUrl).toBe('https://www.tahalearn.com/ar/newsletter/confirmee')
    expect(brevoCall(1).body.templateId).toBe(12)
  })

  it('fonctionne avec un modèle par langue sans modèle de secours (config de production)', async () => {
    const { POST } = await loadRoute({
      BREVO_DOI_TEMPLATE_ID_FR: '21',
      BREVO_DOI_TEMPLATE_ID_AR: '22',
      BREVO_DOI_TEMPLATE_ID_EN: '23',
    })

    for (const locale of ['fr', 'ar', 'en']) {
      await POST(post({ email: `${locale}@example.org`, locale }))
    }

    expect(fetchMock.mock.calls.map((_, i) => brevoCall(i).body.templateId)).toEqual([21, 22, 23])
  })

  it("renvoie une erreur si Brevo refuse l'envoi du mail de confirmation", async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12' })
    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify({ code: 'invalid_parameter' }), { status: 400 })
    )
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const res = await POST(post({ email: 'lecteur@example.org', locale: 'fr' }))
    expect(res.status).toBe(500)
  })

  it('ajoute directement à la liste sans modèle configuré (comportement historique)', async () => {
    const { POST } = await loadRoute({})
    const res = await POST(post({ email: 'lecteur@example.org', locale: 'en' }))

    expect(await res.json()).toMatchObject({ success: true, mode: 'brevo' })
    expect(brevoCall().url).toBe('https://api.brevo.com/v3/contacts')
    expect(brevoCall().body).toMatchObject({ email: 'lecteur@example.org', listIds: [2] })
  })

  it('le faux succès renvoyé aux robots imite le mode « en attente »', async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12' })
    vi.spyOn(console, 'warn').mockImplementation(() => {})

    const res = await POST(post({ email: 'bot@example.org', website: 'http://spam' }))
    expect(await res.json()).toMatchObject({ success: true, pending: true })
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('newsletter — validation des entrées', () => {
  it('refuse un email qui n’est pas une chaîne', async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12' })
    const res = await POST(post({ email: ['a@b.co'] }))
    expect(res.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('ramène une langue inconnue à fr', async () => {
    const { POST } = await loadRoute({ BREVO_DOI_TEMPLATE_ID: '12' })
    await POST(post({ email: 'lecteur@example.org', locale: '<script>' }))
    expect(brevoCall().body.attributes.LANGUE).toBe('fr')
    expect(brevoCall().body.redirectionUrl).toBe('https://www.tahalearn.com/fr/newsletter/confirmee')
  })
})
