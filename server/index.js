import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT) || 3001

app.disable('x-powered-by')
app.use(helmet())
app.use(express.json({ limit: '10kb' }))
app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-8', legacyHeaders: false }))

app.post('/api/contact', async (request, response) => {
  const { name, email, subject, message, website } = request.body ?? {}
  if (typeof website === 'string' && website.trim()) return response.status(202).json({ ok: true })

  const validEmail = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 80 || !validEmail || email.length > 254 || typeof subject !== 'string' || subject.trim().length < 3 || subject.length > 120 || typeof message !== 'string' || message.trim().length < 10 || message.length > 4000) {
    return response.status(400).json({ error: 'Please check the form fields and try again.' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO, CONTACT_FROM } = process.env
  if (!SMTP_PASSWORD && SMTP_HOST === 'smtp.gmail.com') {
    return response.status(503).json({ error: 'Gmail is configured, but SMTP_PASSWORD still needs your Google App Password in .env. Restart the contact API after adding it.' })
  }
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO || !CONTACT_FROM) {
    return response.status(503).json({ error: 'Email delivery settings are incomplete. Check the SMTP values in .env and restart the contact API.' })
  }

  try {
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT) || 587, secure: process.env.SMTP_SECURE === 'true', auth: { user: SMTP_USER, pass: SMTP_PASSWORD } })
    await transporter.sendMail({ from: CONTACT_FROM, to: CONTACT_TO, replyTo: { name: name.trim(), address: email.trim() }, subject: `Portfolio contact: ${subject.trim()}`, text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}` })
    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email delivery failed:', error.message)
    return response.status(502).json({ error: 'Message delivery failed. Please try again later.' })
  }
})

app.get('/api/health', (_request, response) => response.json({ ok: true }))
app.listen(port, () => console.log(`Contact API listening on http://localhost:${port}`))
