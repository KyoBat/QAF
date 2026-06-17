'use client'

/**
 * Champ honeypot anti-bot : invisible et inaccessible pour l'humain
 * (hors flux, tabIndex -1, aria-hidden), mais souvent rempli par les bots.
 * Si la valeur est non vide côté serveur → requête rejetée silencieusement.
 */
export function HoneypotField({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute left-[-9999px] top-0 h-0 w-0 opacity-0"
    />
  )
}
