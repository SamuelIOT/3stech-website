const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing SMTP Connection...');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***' + process.env.SMTP_PASS.slice(-4) : 'NOT SET');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ SMTP Connection Failed:');
    console.log(error);
  } else {
    console.log('✅ SMTP Server is ready to send emails');
    
    // Try sending a test email
    transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TEAM_EMAIL,
      subject: 'Test Email from 3S Tech Website',
      text: 'This is a test email to verify SMTP is working correctly.',
      html: '<p>This is a test email to verify SMTP is working correctly.</p>'
    }, (err, info) => {
      if (err) {
        console.log('❌ Failed to send test email:');
        console.log(err);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('Message ID:', info.messageId);
      }
      process.exit();
    });
  }
});

