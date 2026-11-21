import { getContactConfigurationError, sendContactEmail, validateContactPayload } from '../server/contact.js'

const rateWindowMs = 15 * 60 * 1000
const requestLimit = 5
const requestsByIp = new Map()

function isRateLimited(request) {
  const forwardedFor = request.headers['x-vercel-forwarded-for'] || request.headers['x-forwarded-for'] || 'unknown'
  const ip = String(forwardedFor).split(',')[0].trim()
  const now = Date.now()
  const attempts = (requestsByIp.get(ip) || []).filter((timestamp) => now - timestamp < rateWindowMs)
  if (attempts.length >= requestLimit) {
    requestsByIp.set(ip, attempts)
    return true
  }
  attempts.push(now)
  requestsByIp.set(ip, attempts)
  return false
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const payload = request.body ?? {}
  if (isRateLimited(request)) return response.status(429).json({ error: 'Too many messages. Please try again later.' })
  if (typeof payload.website === 'string' && payload.website.trim()) return response.status(202).json({ ok: true })

  const validationError = validateContactPayload(payload)
  if (validationError) return response.status(400).json({ error: validationError })

  const configurationError = getContactConfigurationError()
  if (configurationError) return response.status(503).json({ error: configurationError })

  try {
    await sendContactEmail(payload)
    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email delivery failed:', error.code || 'SMTP error')
    return response.status(502).json({ error: 'Message delivery failed. Please try again later.' })
  }
}