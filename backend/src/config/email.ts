import nodemailer from 'nodemailer';

// Email configuration - uses environment variables
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'web@studycafe.in',
    pass: process.env.EMAIL_PASS || 'bxbt ovrw odpm pigt'
  }
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
  'showcase-website': process.env.SHOWCASE_EMAIL || 'sdeepakncy@gmail.com'
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
  'showcase-website': process.env.SHOWCASE_NAME || 'StudyCafe Showcase'
};

// Email sender function
export const sendEmail = async (
  website: string,
  subject: string,
  htmlContent: string,
  attachments?: any[]
): Promise<void> => {
  try {
    const recipientEmail = WEBSITE_EMAILS[website as keyof typeof WEBSITE_EMAILS];
    const websiteName = WEBSITE_NAMES[website as keyof typeof WEBSITE_NAMES];

    if (!recipientEmail) {
      throw new Error(`No email configured for website: ${website}`);
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



// Email templates with modern design and emoji icons
export const createContactEmailTemplate = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      margin: 0; 
      padding: 0; 
      background-color: #f4f4f4; 
    }
    .email-container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white; 
      border-radius: 10px; 
      overflow: hidden; 
      box-shadow: 0 0 20px rgba(0,0,0,0.1); 
    }
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
    }
    .header h1 { 
      margin: 0; 
      font-size: 24px; 
      font-weight: 600; 
    }
    .content { 
      padding: 30px; 
    }
    .section { 
      margin-bottom: 25px; 
      border-left: 4px solid #667eea; 
      padding-left: 20px; 
    }
    .section-title { 
      font-size: 18px; 
      font-weight: 600; 
      margin-bottom: 15px; 
      color: #333; 
    }
    .field { 
      margin-bottom: 12px; 
    }
    .field-label { 
      font-weight: 600; 
      color: #555; 
      margin-bottom: 5px; 
    }
    .field-value { 
      color: #333; 
      background: #f8f9fa; 
      padding: 8px 12px; 
      border-radius: 4px; 
      border: 1px solid #e9ecef; 
    }
    .footer { 
      background: #f8f9fa; 
      padding: 20px 30px; 
      border-top: 1px solid #e9ecef; 
      color: #6c757d; 
      font-size: 14px; 
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field">
          <div class="field-label">👤 Name:</div>
          <div class="field-value">${formData.name || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">📧 Email:</div>
          <div class="field-value">${formData.email || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">📱 Phone:</div>
          <div class="field-value">${formData.phone || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">🏢 Company:</div>
          <div class="field-value">${formData.company || 'Not provided'}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Message</div>
        <div class="field">
          <div class="field-label">💬 Message:</div>
          <div class="field-value">${formData.message || 'No message provided'}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from your website contact form</p>
      <p>Received on: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>`;
};

export const createQueryEmailTemplate = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Query Form Submission</title>
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
    <h1>❓ New Query Form Submission</h1>

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

    <div class="footer">This email was sent from your website query form — Received on: ${new Date().toLocaleString()}</div>
  </div>
</body>
</html>`;
};

// Specialized Query email template for Template-4 (only includes fields used by Template-4 form)
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

export const createCareerEmailTemplate = (formData: any): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Career Application</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      margin: 0; 
      padding: 0; 
      background-color: #f4f4f4; 
    }
    .email-container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white; 
      border-radius: 10px; 
      overflow: hidden; 
      box-shadow: 0 0 20px rgba(0,0,0,0.1); 
    }
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
    }
    .header h1 { 
      margin: 0; 
      font-size: 24px; 
      font-weight: 600; 
    }
    .content { 
      padding: 30px; 
    }
    .section { 
      margin-bottom: 25px; 
      border-left: 4px solid #667eea; 
      padding-left: 20px; 
    }
    .section-title { 
      font-size: 18px; 
      font-weight: 600; 
      margin-bottom: 15px; 
      color: #333; 
    }
    .field { 
      margin-bottom: 12px; 
    }
    .field-label { 
      font-weight: 600; 
      color: #555; 
      margin-bottom: 5px; 
    }
    .field-value { 
      color: #333; 
      background: #f8f9fa; 
      padding: 8px 12px; 
      border-radius: 4px; 
      border: 1px solid #e9ecef; 
    }
    .footer { 
      background: #f8f9fa; 
      padding: 20px 30px; 
      border-top: 1px solid #e9ecef; 
      color: #6c757d; 
      font-size: 14px; 
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>💼 New Career Application</h1>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Personal Information</div>
        <div class="field">
          <div class="field-label">👤 Full Name:</div>
          <div class="field-value">${formData.fullName || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">📧 Email:</div>
          <div class="field-value">${formData.email || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">📱 Phone:</div>
          <div class="field-value">${formData.phone || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">📍 Address:</div>
          <div class="field-value">${formData.address || 'Not provided'}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Information</div>
        <div class="field">
          <div class="field-label">💼 Position Applied For:</div>
          <div class="field-value">${formData.position || 'Not specified'}</div>
        </div>
        <div class="field">
          <div class="field-label">🎓 Education:</div>
          <div class="field-value">${formData.education || 'Not provided'}</div>
        </div>
        <div class="field">
          <div class="field-label">⏰ Experience:</div>
          <div class="field-value">${formData.yearsOfExperience || 0} Year(s) ${formData.monthsOfExperience || 0} Month(s)</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Additional Information</div>
        <div class="field">
          <div class="field-label">💭 Comments/Questions:</div>
          <div class="field-value">${formData.comments || 'No additional comments'}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Resume</div>
        <div class="field">
          <div class="field-label">📎 Resume:</div>
          <div class="field-value">${formData.resume ? 'Resume uploaded (check attachments)' : 'No resume uploaded'}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from your website career form</p>
      <p>Received on: ${new Date().toLocaleString()}</p>
    </div>
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
