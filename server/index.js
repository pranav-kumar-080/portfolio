import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { getContactConfigurationError, sendContactEmail, validateContactPayload } from './contact.js'

const app = express()
const port = Number(process.env.PORT) || 3001
const allowedOrigins = new Set((process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map((origin) => origin.trim()).filter(Boolean))

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: (origin, callback) => callback(null, !origin || allowedOrigins.has(origin)) }))
app.use(express.json({ limit: '10kb' }))
app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-8', legacyHeaders: false }))

app.post('/api/contact', async (request, response) => {
  const payload = request.body ?? {}
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
})

app.get('/api/health', (_request, response) => response.json({ ok: true }))
app.listen(port, () => console.log(`Contact API listening on http://localhost:${port}`))
