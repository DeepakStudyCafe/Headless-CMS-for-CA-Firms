export const createCareerEmailTemplate = (formData: any): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 700px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f8f9fa; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 18px; font-weight: 600; color: #dc2626; margin-bottom: 15px; border-bottom: 2px solid #ef4444; padding-bottom: 8px; }
        .field { margin-bottom: 12px; padding: 10px; background: white; border-radius: 6px; border-left: 4px solid #ef4444; }
        .field-label { font-weight: 600; color: #dc2626; margin-bottom: 4px; }
        .field-value { color: #374151; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>💼 New Career Application</h2>
          <p>A candidate has applied for a position through your website</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Personal Information</div>
            <div class="field">
              <div class="field-label">🏷️ Full Name</div>
              <div class="field-value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="field">
              <div class="field-label">📧 Email Address</div>
              <div class="field-value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="field-label">📱 Mobile Number</div>
              <div class="field-value">${formData.mobile}</div>
            </div>
            <div class="field">
              <div class="field-label">⚧️ Gender</div>
              <div class="field-value">${formData.gender}</div>
            </div>
            <div class="field">
              <div class="field-label">🎂 Date of Birth</div>
              <div class="field-value">${formData.dateOfBirth}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">💼 Professional Information</div>
            <div class="field">
              <div class="field-label">🎯 Position Applied For</div>
              <div class="field-value">${formData.position || 'Not specified'}</div>
            </div>
            <div class="field">
              <div class="field-label">🎓 Qualification</div>
              <div class="field-value">${formData.qualification || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">🌐 Portfolio Website</div>
              <div class="field-value">${formData.portfolioWebsite || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">🏢 Last Company</div>
              <div class="field-value">${formData.lastCompany || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="field-label">⏰ Total Experience</div>
              <div class="field-value">${formData.yearsOfExperience || 0} years ${formData.monthsOfExperience || 0} months</div>
            </div>
            ${formData.comments ? `
            <div class="field">
              <div class="field-label">💭 Additional Comments</div>
              <div class="field-value">${formData.comments}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="section">
            <div class="section-title">📎 Attachments</div>
            <div class="field">
              <div class="field-label">📄 Resume</div>
              <div class="field-value">Resume file is attached to this email</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from your website career form</p>
          <p>Received on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};