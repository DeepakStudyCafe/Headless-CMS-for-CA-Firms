const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Default Gmail SMTP credentials provided by the user (hardcoded as requested).
// WARNING: these credentials will be stored in this file and committed if you push the repo.
const DEFAULT_SMTP = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  user: 'web@studycafe.in',
  pass: 'bxbt ovrw odpm pigt',
}

app.post('/send-email', async (req, res) => {
  let { smtp, mail } = req.body || {}
  const log = []

  // If smtp not provided in request, fall back to hardcoded DEFAULT_SMTP
  if (!smtp) {
    smtp = DEFAULT_SMTP
    log.push('No SMTP provided in request — using hardcoded DEFAULT_SMTP')
  }

  if (!mail) {
    return res.status(400).json({ ok: false, error: 'Missing mail in request body' })
  }

  try {
    log.push('Creating transporter...')
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: !!smtp.secure,
      auth: smtp.user && smtp.pass ? { user: smtp.user, pass: smtp.pass } : undefined,
      tls: { rejectUnauthorized: false },
      connectionTimeout: smtp.connectionTimeout || 30000,
    })

    log.push('Verifying transporter connection...')
    const verifyInfo = await transporter.verify()
    log.push(`Verification result: ${JSON.stringify(verifyInfo)}`)

    // Ensure from is the hardcoded sender email
    const fromAddress = (mail && mail.from) || DEFAULT_SMTP.user
    log.push(`Using from address: ${fromAddress}`)

    log.push('Sending mail...')
    const info = await transporter.sendMail({
      from: fromAddress,
      to: mail.to,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    })

    log.push(`Send result: ${JSON.stringify(info)}`)

    res.json({ ok: true, log, info })
  } catch (err) {
    log.push(`Error: ${err && err.message ? err.message : String(err)}`)
    res.status(500).json({ ok: false, log, error: err && err.stack ? err.stack : String(err) })
  }
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Email test server listening on http://localhost:${PORT}`)
})
