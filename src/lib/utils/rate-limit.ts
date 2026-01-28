/**
 * Simple in-memory rate limiter
 * For production, consider using Upstash Redis or Vercel KV
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

// In-memory store (will reset on server restart)
const store = new Map<string, RateLimitEntry>()

// Cleanup old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  const keysToDelete: string[] = []
  
  store.forEach((entry, key) => {
    if (entry.resetAt < now) {
      keysToDelete.push(key)
    }
  })
  
  keysToDelete.forEach(key => store.delete(key))
}, 10 * 60 * 1000)

interface RateLimitConfig {
  /**
   * Maximum number of requests allowed in the time window
   */
  limit: number
  /**
   * Time window in seconds
   */
  windowSeconds: number
}

interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (IP address, email, etc.)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { limit: 5, windowSeconds: 60 }
): RateLimitResult {
  const now = Date.now()
  const windowMs = config.windowSeconds * 1000
  const resetAt = now + windowMs

  const entry = store.get(identifier)

  if (!entry || entry.resetAt < now) {
    // First request or window expired
    store.set(identifier, { count: 1, resetAt })
    return {
      success: true,
      remaining: config.limit - 1,
      resetAt,
    }
  }

  // Within the time window
  if (entry.count >= config.limit) {
    // Limit exceeded
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    }
  }

  // Increment count
  entry.count++
  store.set(identifier, entry)

  return {
    success: true,
    remaining: config.limit - entry.count,
    resetAt: entry.resetAt,
  }
}

/**
 * Get client IP address from request headers
 * @param request - NextRequest object
 * @returns IP address string
 */
export function getClientIp(request: Request): string {
  // Try different headers in order of preference
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const real = request.headers.get('x-real-ip')
  if (real) {
    return real
  }

  // Fallback (not reliable in production)
  return 'unknown'
}
