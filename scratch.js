const fs = require('fs');
let content = fs.readFileSync('backend/src/utils/mpkr-and-co-llp-seed.ts', 'utf8');

content = content.replace(/vb-agrawal-and-associates/g, 'mpkr-and-co-llp');
content = content.replace(/V\.B\. Agrawal & Associates/g, 'MPKR & Co LLP');
content = content.replace(/https:\/\/vbagrawal\.in\.in/g, 'https://mpkrandcollp.in');
content = content.replace(/https:\/\/vbagrawalandassociates\.com/g, 'https://mpkrandcollp.in');
content = content.replace(/info@vb-agrawal-and-associates\.com/g, 'mpkrandcollp@gmail.com');
content = content.replace(/\+91 11 4567 8901/g, '+91 9491079632');
content = content.replace(/9827198961/g, '919491079632');
content = content.replace(/Mon - Sat: 9:30 AM - 7:00 PM/g, '11:00 to 20:00');
content = content.replace(/123 Business Avenue, Financial District, New Delhi, 110001/g, '24-7-191/2, 2nd Floor, 3rd Street, Ravindra Nagar, Magunta Layout, Beside GST Bhavan, Nellore - 524003.');
content = content.replace(/V\.B\. Agrawal/g, 'MPKR & Co LLP');

content = content.replace(
  /hours: '11:00 to 20:00',/g,
  `hours: '11:00 to 20:00',
              mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3458832341466!2d75.87191307476127!3d22.715381927723055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0x29bfb1a01157c13e!2sKrishan%20Garg%20%26%20Co!5e0!3m2!1sen!2sin!4v1780727408710!5m2!1sen!2sin',`
);

fs.writeFileSync('backend/src/utils/mpkr-and-co-llp-seed.ts', content);
