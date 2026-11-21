import nodemailer from 'nodemailer'

export function validateContactPayload(payload) {
  const { name, email, subject, message } = payload ?? {}
  const validEmail = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 80 || !validEmail || email.length > 254 || typeof subject !== 'string' || subject.trim().length < 3 || subject.length > 120 || typeof message !== 'string' || message.trim().length < 10 || message.length > 4000) {
    return 'Please check the form fields and try again.'
  }
  return null
}

export function getContactConfigurationError() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, CONTACT_TO, CONTACT_FROM } = process.env
  if (!SMTP_PASSWORD && SMTP_HOST === 'smtp.gmail.com') {
    return 'Gmail is configured, but SMTP_PASSWORD needs a Google App Password in the server environment.'
  }
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO || !CONTACT_FROM) {
    return 'Email delivery settings are incomplete. Check the SMTP environment variables on the API host.'
  }
  return null
}

export async function sendContactEmail({ name, email, subject, message }) {
  const configurationError = getContactConfigurationError()
  if (configurationError) {
    const error = new Error(configurationError)
    error.code = 'CONTACT_CONFIG'
    throw error
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD.replace(/\s+/g, ''),
    },
  })

  return transporter.sendMail({
    from: process.env.CONTACT_FROM,
    to: process.env.CONTACT_TO,
    replyTo: { name: name.trim(), address: email.trim() },
    subject: `Portfolio contact: ${subject.trim().replace(/[\r\n]+/g, ' ')}`,
    text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
  })
}