import nodemailer from 'nodemailer';

// Email configuration - uses environment variables
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER || 'web@studycafe.in',
    pass: process.env.EMAIL_PASS || 'bxbt ovrw odpm pigt'
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000
});

// Dynamic website to email mapping using environment variables
const WEBSITE_EMAILS = {
  'firm1-sharma': process.env.FIRM1_EMAIL || 'sharma.contact@gmail.com',
  'firm2-verma': process.env.FIRM2_EMAIL || 'verma.business@gmail.com',
  
  'firm3-gupta': process.env.FIRM3_EMAIL || 'gupta.k.deepak@gmail.com',
  'firm4-kapoor': process.env.FIRM4_EMAIL || 'kapoor.contact@gmail.com',
  'firm5-singh': process.env.FIRM5_EMAIL || 'singh.contact@gmail.com',
  'firm6-patel': process.env.FIRM6_EMAIL || 'patel.contact@gmail.com',
  'template-4': process.env.TEMPLATE_4_EMAIL || 'ca.asgupta@gmail.com',
  'showcase-website': process.env.SHOWCASE_EMAIL || 'info@studycafe.in',
  'abhishekrajaram': 'support@abhishekrajaram.com',
  'monikas': 't.sharma1991@mail.ca.in',
  's-b-bhavi': 'cabhavi10@gmail.com',
  'agarwal-financial-consultancy': process.env.AGARWAL_EMAIL || 'agarwalfinancialconsultancy@gmail.com',
  'vineet-taral': process.env.VINEET_EMAIL || 'vineettaral@gmail.com',
  'vineet-taral-and-associates': process.env.VINEET_EMAIL || 'vineettaral@gmail.com',
  'isk-and-co': process.env.ISK_AND_CO_EMAIL || 'sansheer@lgfinconsult.com',
  'firm1-isk': process.env.ISK_AND_CO_EMAIL || 'sansheer@lgfinconsult.com',
  'r-mugunthan': 'rmugunth@gmail.com',
};

// Website names mapping
const WEBSITE_NAMES = {
  'firm1-sharma': process.env.FIRM1_NAME || 'Sharma & Associates',
  'firm2-verma': process.env.FIRM2_NAME || 'Verma & Co',
  
  'firm3-gupta': process.env.FIRM3_NAME || 'Gupta Partners',
  'firm4-kapoor': process.env.FIRM4_NAME || 'Kapoor Associates',
  'firm5-singh': process.env.FIRM5_NAME || 'Singh & Partners',
  'firm6-patel': process.env.FIRM6_NAME || 'Patel Group',
  'template-4': process.env.TEMPLATE_4_NAME || 'Arvind Gupta & Associates',
  'showcase-website': process.env.SHOWCASE_NAME || 'StudyCafe Showcase',
  'abhishekrajaram': 'Abhishek Rajaram CA Firm',
  'monikas': 'Monika S CA Firm',
  's-b-bhavi': 'S B Bhavi & CO',
  'agarwal-financial-consultancy': process.env.AGARWAL_NAME || 'Agarwal Financial Consultancy',
  'vineet-taral': process.env.VINEET_NAME || 'Vineet Taral & Associates',
  'isk-and-co': process.env.ISK_AND_CO_NAME || 'ISK & Co',
  'firm1-isk': process.env.ISK_AND_CO_NAME || 'ISK & Co',
};

// Email sender function
export const sendEmail = async (
  website: string,
  subject: string,
  htmlContent: string,
  attachments?: any[]
): Promise<void> => {
  try {
    // Normalize website key (accepts e.g. 'MonikaS' or 'monikas') and provide a sensible default
    const websiteKey = (website || 'showcase-website').toString().toLowerCase();
    const recipientEmail = WEBSITE_EMAILS[websiteKey as keyof typeof WEBSITE_EMAILS];
    const websiteName = WEBSITE_NAMES[websiteKey as keyof typeof WEBSITE_NAMES] || websiteKey;

    if (!recipientEmail) {
      throw new Error(`No email configured for website: ${websiteKey}`);
    }

    const fromName = process.env.EMAIL_FROM_NAME || 'Professional Services Contact Form';
    const fromEmail = process.env.EMAIL_USER || 'web@studycafe.in';

    const mailOptions = {
      from: `"${fromName} - ${websiteName}" <${fromEmail}>`,
      to: recipientEmail,
      subject: `${subject} - ${websiteName}`,
      html: htmlContent,
      attachments: attachments || []
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${recipientEmail} for ${websiteName} (${website})`);
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};



// Helper for dynamically building email tables
const formatKey = (k: string) => k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

const generateBaseEmail = (title: string, emoji: string, formData: any) => {
  const exclude = ['website', 'websiteSlug', 'formType'];
  const escape = (v: any) => String(v).replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let rows = '';
  for (const [key, value] of Object.entries(formData)) {
    if (value === undefined || value === null || value === '' || exclude.includes(key)) continue;
    rows += `
      <tr>
        <td style="padding:8px 10px; vertical-align:top; width:35%; font-weight:600; color:#333; font-size:13px;">${formatKey(key)}</td>
        <td style="padding:8px 10px; vertical-align:top; color:#222; font-size:13px;">${escape(value)}</td>
      </tr>`;
  }

  const content = rows
    ? `<table role="presentation" style="width:100%; border-collapse:collapse;">${rows}</table>`
    : '<p style="margin:0; color:#666; font-style:italic;">No specific fields were provided.</p>';

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New ${title} Submission</title>
</head>
<body style="margin:0; padding:0; background:#f6f7f8; font-family:Arial,Helvetica,sans-serif; color:#222;">
  <div style="max-width:620px; margin:20px auto; padding:0 16px; box-sizing:border-box;">
    <div style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
      <div style="background:#1e3c72; color:#fff; padding:18px 16px; text-align:left;">
        <div style="font-size:16px; font-weight:700;">${emoji} New ${title} Submission</div>
      </div>
      <div style="padding:14px 16px;">
        <div style="font-size:14px; font-weight:600; color:#1e3c72; margin-bottom:8px;">Submission Details</div>
        <div style="margin-bottom:6px;">
          ${content}
        </div>
      </div>
      <div style="background:#fafbfc; padding:10px 16px; border-top:1px solid #eef0f2; font-size:12px; color:#6c757d; text-align:right;">
        Received: ${new Date().toLocaleString()}
      </div>
    </div>
    <div style="text-align:center; font-size:12px; color:#9aa0a6; margin-top:10px;">This email was generated from your website.</div>
  </div>
</body>
</html>`;
};

// Email templates with modern design and emoji icons
export const createContactEmailTemplate = (formData: any): string => generateBaseEmail('Contact', '📧', formData);
export const createQueryEmailTemplate = (formData: any): string => {
  // Normalize query payload: some frontends send both `query` and `message`.
  // We want only a single `message` entry in the email (remove duplicate `Query` field).
  const payload: any = { ...formData };
  const msg = formData.message || formData.query || '';
  // Remove the legacy `query` field so the email shows only `Message` (or `Message` key)
  delete payload.query;
  payload.message = msg;
  return generateBaseEmail('Query', '❓', payload);
};
export const createCareerEmailTemplate = (formData: any): string => generateBaseEmail('Career', '💼', formData);

export const createQueryEmailTemplateTemplate4 = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template-4 - New Query Submission</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin:0; }
    .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; padding:20px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
    h1 { font-size:20px; margin:0 0 12px; }
    .row { margin-bottom:12px; }
    .label { font-weight:600; color:#333; margin-bottom:4px; }
    .value { background:#f8f9fa; padding:8px 10px; border-radius:4px; border:1px solid #ececec; color:#222; }
    .footer { font-size:13px; color:#666; margin-top:18px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>❓ New Query Submission</h1>

    <div class="row">
      <div class="label">👤 Name</div>
      <div class="value">${formData.name || 'Not provided'}</div>
    </div>

    <div class="row">
      <div class="label">📧 Email</div>
      <div class="value">${formData.email || 'Not provided'}</div>
    </div>

    <div class="row">
      <div class="label">💼 Service</div>
      <div class="value">${formData.serviceType || formData.service || 'Not specified'}</div>
    </div>

    <div class="row">
      <div class="label">📝 Subject</div>
      <div class="value">${formData.subjectOfQuery || formData.subject || 'No subject'}</div>
    </div>

    <div class="row">
      <div class="label">💭 Query Details</div>
      <div class="value">${formData.query || 'No query details provided'}</div>
    </div>

    <div class="footer"> ${new Date().toLocaleString()}</div>
  </div>
</body>
</html>`;
};


export const createShowcaseContactEmailTemplate = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Showcase Website - Contact Submission</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin:0; }
    .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; padding:20px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
    h1 { font-size:20px; margin:0 0 12px; }
    .row { margin-bottom:12px; }
    .label { font-weight:600; color:#333; margin-bottom:4px; }
    .value { background:#f8f9fa; padding:8px 10px; border-radius:4px; border:1px solid #ececec; color:#222; }
    .footer { font-size:13px; color:#666; margin-top:18px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📧 New Contact Submission (Showcase Website)</h1>
    <div class="row"><div class="label">👤 Name</div><div class="value">${formData.name || 'Not provided'}</div></div>
    <div class="row"><div class="label">📧 Email</div><div class="value">${formData.email || 'Not provided'}</div></div>
    <div class="row"><div class="label">📱 Phone</div><div class="value">${formData.phone || 'Not provided'}</div></div>
    <div class="row"><div class="label">📝 Subject</div><div class="value">${formData.subject || 'Not provided'}</div></div>
    <div class="row"><div class="label">💬 Message</div><div class="value">${formData.message || 'No message provided'}</div></div>
    <div class="footer">${new Date().toLocaleString()}</div>
  </div>
</body>
</html>`;
};

export const createShowcaseScheduleEmailTemplate = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Showcase Website - Schedule Call</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin:0; }
    .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; padding:20px; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
    h1 { font-size:20px; margin:0 0 12px; }
    .row { margin-bottom:12px; }
    .label { font-weight:600; color:#333; margin-bottom:4px; }
    .value { background:#f8f9fa; padding:8px 10px; border-radius:4px; border:1px solid #ececec; color:#222; }
    .footer { font-size:13px; color:#666; margin-top:18px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📞 New Scheduled Call Request (Showcase Website)</h1>
    <div class="row"><div class="label">👤 Name</div><div class="value">${formData.name || 'Not provided'}</div></div>
    <div class="row"><div class="label">📧 Email</div><div class="value">${formData.email || 'Not provided'}</div></div>
    <div class="row"><div class="label">📱 Phone</div><div class="value">${formData.phone || 'Not provided'}</div></div>
    <div class="row"><div class="label">🏢 Company/Firm Name</div><div class="value">${formData.company || 'Not provided'}</div></div>
    <div class="row"><div class="label">📅 Date</div><div class="value">${formData.date || 'Not provided'}</div></div>
    <div class="row"><div class="label">⏰ Time</div><div class="value">${formData.time || 'Not provided'}</div></div>
    <div class="row"><div class="label">📞 Call Type</div><div class="value">${formData.callType || 'Not provided'}</div></div>
    <div class="row"><div class="label">💬 Message</div><div class="value">${formData.message || 'No message provided'}</div></div>
    <div class="footer">${new Date().toLocaleString()}</div>
  </div>
</body>
</html>`;
};
