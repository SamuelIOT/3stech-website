import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs/promises'
import path from 'path'

// Define the assessment data type
interface AssessmentData {
  // Contact Information
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  role: string
  
  // Environment Details
  cognosVersion?: string
  reportCount: string
  fmModels?: string
  dataSources?: string
  businessSector?: string
  
  // Project Details
  timeline: string
  budget?: string
  
  // Additional Information
  challenges?: string
  powerBIExperience?: string
  
  // Metadata
  submittedAt: string
  ipAddress?: string
}

// Create email transporter
function createTransporter() {
  // Return null if email is not configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('Email not configured - skipping email functionality')
    return null
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    console.log('Email transporter created successfully')
    return transporter
  } catch (error) {
    console.error('Failed to create email transporter:', error)
    return null
  }
}

// Save assessment data to JSON file
async function saveAssessmentData(data: AssessmentData) {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'assessments.json')
    
    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir, { recursive: true })
    }
    
    // Read existing data or create empty array
    let assessments: AssessmentData[] = []
    try {
      const existingData = await fs.readFile(filePath, 'utf-8')
      assessments = JSON.parse(existingData)
    } catch {
      // File doesn't exist, start with empty array
    }
    
    // Add new assessment
    assessments.push(data)
    
    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(assessments, null, 2))
    
    return true
  } catch (error) {
    console.error('Error saving assessment data:', error)
    return false
  }
}

// Send confirmation email to client
async function sendConfirmationEmail(data: AssessmentData) {
  const transporter = createTransporter()
  
  if (!transporter) {
    console.log('Email not configured - skipping confirmation email')
    return false
  }

  const clientEmailHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Assessment Request Confirmation - 3S Tech Inc.</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.6; 
      color: #334155; 
      margin: 0; 
      padding: 0; 
    }
    .container { max-width: 600px; margin: 0 auto; }
    .header { 
      background: linear-gradient(135deg, #1F3A8A 0%, #4F46E5 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
      border-radius: 12px 12px 0 0; 
    }
    .content { 
      background: white; 
      padding: 30px; 
      border: 1px solid #e2e8f0; 
      border-top: none;
    }
    .footer { 
      background: #f8fafc; 
      padding: 20px; 
      border-radius: 0 0 12px 12px; 
      text-align: center; 
      font-size: 14px; 
      color: #64748b; 
      border: 1px solid #e2e8f0;
      border-top: none;
    }
    .btn { 
      display: inline-block; 
      background: #1F3A8A; 
      color: white; 
      padding: 12px 24px; 
      text-decoration: none; 
      border-radius: 8px; 
      font-weight: 600; 
      margin: 20px 0; 
    }
    .details { 
      background: #f8fafc; 
      padding: 20px; 
      border-radius: 8px; 
      margin: 20px 0; 
      border: 1px solid #e2e8f0;
    }
    .timeline { 
      background: #0ea5e9; 
      color: white; 
      padding: 8px 16px; 
      border-radius: 20px; 
      display: inline-block; 
      font-weight: 600; 
    }
    .logo { 
      font-size: 24px; 
      font-weight: bold; 
      margin-bottom: 10px; 
    }
    ul { margin: 10px 0; padding-left: 20px; }
    li { margin: 5px 0; }
    h3 { color: #1F3A8A; margin-top: 25px; margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">3S Tech Inc.</div>
      <h1 style="margin: 0;">Assessment Request Received</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for requesting a Cognos → Power BI Platform migration assessment</p>
    </div>
    
    <div class="content">
      <p>Dear ${data.firstName} ${data.lastName},</p>
      
      <p>We've received your migration assessment request for <strong>${data.company}</strong> and will respond within <span class="timeline">1 Business Day</span> with your customized assessment plan.</p>
      
      <div class="details">
        <h3>Your Request Summary:</h3>
        <ul>
          <li><strong>Reports to Migrate:</strong> ${data.reportCount}</li>
          <li><strong>Timeline:</strong> ${data.timeline}</li>
          <li><strong>Cognos Version:</strong> ${data.cognosVersion || 'To be determined'}</li>
          ${data.businessSector ? `<li><strong>Business Sector:</strong> ${data.businessSector}</li>` : ''}
          ${data.fmModels ? `<li><strong>Framework Manager Models:</strong> ${data.fmModels}</li>` : ''}
        </ul>
      </div>
      
      <h3>What Happens Next?</h3>
      <ol>
        <li><strong>Initial Review</strong> - Our team will analyze your requirements (within 24 hours)</li>
        <li><strong>Assessment Planning</strong> - We'll prepare a customized evaluation approach</li>
        <li><strong>Consultation Call</strong> - 60-minute discussion of findings and recommendations</li>
        <li><strong>Detailed Roadmap</strong> - Complete migration strategy and timeline delivery</li>
      </ol>
      
      <p>Our senior consultants will reach out to schedule your assessment consultation and answer any immediate questions.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="mailto:3stech.inc@gmail.com" class="btn">Reply to This Email</a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>3S Tech Inc.</strong> - Business Intelligence & Data Analysis</p>
      <p><strong>Smart • Secure • Scalable</strong></p>
      <p>Questions? Reply to this email or contact us at 3stech.inc@gmail.com</p>
      <p style="margin-top: 15px; font-size: 12px; color: #94a3b8;">
        This email was sent because you requested an assessment at 3stech.ca
      </p>
    </div>
  </div>
</body>
</html>`
  
  const clientEmailText = `Assessment Request Confirmation - 3S Tech Inc.

Dear ${data.firstName} ${data.lastName},

Thank you for requesting a Cognos → Power BI Platform migration assessment for ${data.company}.

We will respond within 1 business day with your customized assessment plan.

Your Request Summary:
- Reports to Migrate: ${data.reportCount}
- Timeline: ${data.timeline}
- Cognos Version: ${data.cognosVersion || 'To be determined'}
${data.businessSector ? `- Business Sector: ${data.businessSector}` : ''}
${data.fmModels ? `- Framework Manager Models: ${data.fmModels}` : ''}

What Happens Next:
1. Initial Review - Our team will analyze your requirements (within 24 hours)
2. Assessment Planning - We'll prepare a customized evaluation approach  
3. Consultation Call - 60-minute discussion of findings and recommendations
4. Detailed Roadmap - Complete migration strategy and timeline delivery

Our senior consultants will reach out to schedule your assessment consultation.

Best regards,
3S Tech Inc. Team
Smart • Secure • Scalable

Questions? Reply to this email or contact us at 3stech.inc@gmail.com`
  
  try {
    console.log('Sending confirmation email to:', data.email)
    
    const info = await transporter.sendMail({
      from: `"3S Tech Inc. Assessments" <${process.env.FROM_EMAIL || '3stech.inc@gmail.com'}>`,
      to: data.email,
      subject: 'Assessment Request Confirmed - 3S Tech Inc.',
      text: clientEmailText,
      html: clientEmailHTML,
    })
    
    console.log('Confirmation email sent successfully:', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    return false
  }
}

// Send notification email to 3S Tech team
async function sendNotificationEmail(data: AssessmentData) {
  const transporter = createTransporter()
  
  if (!transporter) {
    console.log('Email not configured - skipping team notification')
    return false
  }
  
  const teamEmailHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Assessment Request - 3S Tech Inc.</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.6; 
      color: #334155; 
      margin: 0; 
      padding: 0;
    }
    .container { max-width: 700px; margin: 0 auto; }
    .header { 
      background: #1F3A8A; 
      color: white; 
      padding: 20px; 
      text-align: center; 
      border-radius: 8px 8px 0 0; 
    }
    .content { 
      background: white; 
      padding: 30px; 
      border: 1px solid #e2e8f0; 
      border-top: none;
    }
    .section { 
      margin: 25px 0; 
      padding: 20px; 
      background: #f8fafc; 
      border-radius: 8px; 
      border: 1px solid #e2e8f0;
    }
    .urgent { 
      background: #fef3c7; 
      border-left: 4px solid #f59e0b; 
      padding: 15px; 
      margin: 20px 0; 
      border-radius: 4px;
    }
    .contact-info { 
      background: #e0f2fe; 
      padding: 15px; 
      border-radius: 6px; 
      border: 1px solid #0ea5e9;
    }
    .priority { color: #dc2626; font-weight: bold; }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 15px 0; 
    }
    th, td { 
      text-align: left; 
      padding: 8px; 
      border-bottom: 1px solid #e2e8f0; 
    }
    th { 
      background: #f1f5f9; 
      font-weight: 600; 
    }
    h3 { 
      color: #1F3A8A; 
      margin-bottom: 15px; 
    }
    .logo { 
      font-size: 20px; 
      font-weight: bold; 
      margin-bottom: 5px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">3S Tech Inc.</div>
      <h1 style="margin: 0;">🚨 New Assessment Request</h1>
      <p style="margin: 10px 0 0 0;">Priority lead from ${data.company}</p>
    </div>
    
    <div class="content">
      ${data.timeline === 'immediate' || data.timeline === '1-3-months' ? 
        '<div class="urgent"><strong>⚡ URGENT:</strong> Client needs immediate attention - ' + data.timeline + '</div>' : ''}
      
      <div class="section">
        <h3>Contact Information</h3>
        <div class="contact-info">
          <table>
            <tr><th>Name:</th><td>${data.firstName} ${data.lastName}</td></tr>
            <tr><th>Email:</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><th>Phone:</th><td>${data.phone || 'Not provided'}</td></tr>
            <tr><th>Company:</th><td><strong>${data.company}</strong></td></tr>
            <tr><th>Role:</th><td>${data.role}</td></tr>
          </table>
        </div>
      </div>
      
      <div class="section">
        <h3>Environment Details</h3>
        <table>
          <tr><th>Cognos Version:</th><td>${data.cognosVersion || 'Not specified'}</td></tr>
          <tr><th>Report Count:</th><td><strong>${data.reportCount}</strong></td></tr>
          <tr><th>FM Models:</th><td>${data.fmModels || 'Not specified'}</td></tr>
          <tr><th>Data Sources:</th><td>${data.dataSources || 'Not specified'}</td></tr>
          <tr><th>Business Sector:</th><td>${data.businessSector || 'Not specified'}</td></tr>
        </table>
      </div>
      
      <div class="section">
        <h3>Project Requirements</h3>
        <table>
          <tr><th>Timeline:</th><td><span class="${data.timeline === 'immediate' ? 'priority' : ''}">${data.timeline}</span></td></tr>
          <tr><th>Budget:</th><td>${data.budget || 'Not disclosed'}</td></tr>
          <tr><th>Power BI Experience:</th><td>${data.powerBIExperience || 'Not specified'}</td></tr>
        </table>
      </div>
      
      ${data.challenges ? `
      <div class="section">
        <h3>Challenges & Goals</h3>
        <p><em>"${data.challenges}"</em></p>
      </div>
      ` : ''}
      
      <div class="section">
        <h3>📋 Next Actions</h3>
        <ol>
          <li><strong>Respond within 24 hours</strong> to schedule assessment call</li>
          <li>Prepare environment questionnaire for ${data.reportCount} reports</li>
          <li>Review sector-specific requirements for ${data.businessSector || 'their industry'}</li>
          <li>Schedule 60-minute consultation call</li>
        </ol>
      </div>
      
      <p><strong>Submitted:</strong> ${new Date(data.submittedAt).toLocaleString()}</p>
      <p><strong>IP Address:</strong> ${data.ipAddress}</p>
    </div>
  </div>
</body>
</html>`
  
  try {
    console.log('Sending team notification email to:', process.env.TEAM_EMAIL)
    
    const info = await transporter.sendMail({
      from: `"3S Tech Assessment System" <${process.env.FROM_EMAIL || '3stech.inc@gmail.com'}>`,
      to: process.env.TEAM_EMAIL || '3stech.inc@gmail.com',
      subject: `🚨 New Assessment Request: ${data.company} (${data.reportCount} reports)`,
      html: teamEmailHTML,
    })
    
    console.log('Team notification sent successfully:', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending team notification:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  console.log('Assessment API called')
  
  try {
    const data = await request.json()
    console.log('Form data received:', { email: data.email, company: data.company })
    
    // Add metadata
    const assessmentData: AssessmentData = {
      ...data,
      submittedAt: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    }
    
    // Basic validation
    if (!assessmentData.firstName || !assessmentData.lastName || !assessmentData.email || !assessmentData.company) {
      console.log('Validation failed - missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    console.log('Validation passed, saving data...')
    
    // Save data
    const dataSaved = await saveAssessmentData(assessmentData)
    if (!dataSaved) {
      console.error('Failed to save data to file')
      throw new Error('Failed to save assessment data')
    }
    
    console.log('Data saved successfully, sending emails...')
    
    // Send emails (non-blocking - don't fail if email fails)
    const [confirmationSent, notificationSent] = await Promise.all([
      sendConfirmationEmail(assessmentData).catch(err => {
        console.error('Confirmation email failed:', err)
        return false
      }),
      sendNotificationEmail(assessmentData).catch(err => {
        console.error('Notification email failed:', err)
        return false
      }),
    ])
    
    console.log('Email results:', { confirmationSent, notificationSent })
    
    return NextResponse.json({
      success: true,
      message: 'Assessment request submitted successfully',
      confirmationEmailSent: confirmationSent,
      teamNotificationSent: notificationSent,
    })
    
  } catch (error) {
    console.error('Assessment submission error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process assessment request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}