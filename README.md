# 3S Tech Inc. Website

A modern Next.js website for 3S Tech Inc., specialists in Business Intelligence and Data Analysis with expertise in migrating IBM Cognos to Microsoft Power BI Platform.

## Features

- **Modern Design**: Built with React, Next.js 15, and Tailwind CSS
- **Responsive**: Mobile-first design that works across all devices
- **Brand Consistent**: Implements the complete 3S Tech brand system
- **SEO Optimized**: Meta tags and structure optimized for search engines
- **Accessible**: WCAG compliant design with proper contrast and navigation

## Pages

- **Homepage**: Hero section, value propositions, process timeline, case studies
- **Services**: 
  - Cognos to Power BI Platform migration
  - Power BI Paginated Reports
- **Process**: Detailed 6-step migration process
- **Case Studies**: Success stories and metrics
- **Contact**: Assessment request form and contact information

## Brand System

### Color Palette
- **Primary Trust Blue**: #1F3A8A (Primary-700)
- **Primary Hover**: #274BB3 (Primary-600) 
- **Primary Active**: #172554 (Primary-800)
- **Secondary Indigo**: #4F46E5
- **Accent Info**: #0EA5E9
- **Accent Success**: #10B981

### Typography
- **Headings**: Inter font family, 600-700 weight
- **Body**: Inter font family, 400-500 weight
- **Monospace**: IBM Plex Mono for code/technical content

### Three Pillars (3S)
- **Smart**: Expert assessment and logic replication
- **Secure**: Governed by design with RLS parity
- **Scalable**: Future-proof models and maintainable patterns

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
src/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contact/assessment page
│   └── services/          # Service pages
│       ├── cognos-to-powerbi/
│       └── paginated-reports/
└── components/            # Reusable React components
    ├── Header.tsx         # Navigation header
    ├── Hero.tsx           # Homepage hero section
    ├── ValueProps.tsx     # Three pillars (Smart, Secure, Scalable)
    ├── ProcessTimeline.tsx # 6-step migration process
    ├── CaseStudyMetrics.tsx # Success metrics
    ├── CTAStrip.tsx       # Call-to-action sections
    └── Footer.tsx         # Site footer
\`\`\`

## Key Components

### Header
- Sticky navigation with hover dropdowns
- Mobile-responsive hamburger menu
- Primary CTA button

### Hero Section
- Gradient background (Trust Blue to Indigo)
- Two-CTA layout: Assessment + Sample Report
- Trust signals for key industries

### Value Propositions
- Three-card layout for Smart, Secure, Scalable
- Icon + title + description format
- Consistent with brand messaging

### Process Timeline
- Vertical timeline with 6 steps:
  1. Analysis → 2. Plan → 3. Design → 4. Development → 5. Testing → 6. Maintenance
- Detailed descriptions for each phase
- AI assistance callout

### Case Study Metrics
- Four key metrics: 120 reports, 30% faster, 0 downtime, 10 weeks
- Testimonial quote with attribution
- Primary blue background for emphasis

## Content Strategy

### Messaging
- **Voice**: Calm, precise, senior consultant
- **Tone**: Confident, transparent, de-jargonized
- **Positioning**: Engineering-first partner that de-risks migrations

### SEO Keywords
- Cognos to Power BI migration
- Power BI Platform
- Power BI Paginated Reports
- BI modernization
- RLS in Power BI
- Report validation
- Governance

### Target Audience
- CIOs / Directors of Analytics
- BI Managers / Report Authors  
- Power Users in mid-market & enterprise
- Compliance-sensitive sectors (public, healthcare, finance, education)

## AI Assistant Integration

The site includes placeholder integration for an AI assistant with:
- Assessment intake workflows
- Parity Q&A for migration questions
- Report type routing (interactive vs paginated)
- Privacy-first approach with explicit consent

## Deployment

The site is configured for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify** 
- **AWS Amplify**
- Any Node.js hosting provider

### Environment Variables
Create a \`.env.local\` file for:
\`\`\`
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@3stech.com
\`\`\`

## Contributing

1. Follow the established component patterns
2. Maintain brand consistency (colors, typography, messaging)
3. Ensure accessibility standards
4. Test responsive design on multiple devices
5. Validate HTML and check for console errors

## License

© 2025 3S Tech Inc. All rights reserved.

---

**Contact**: Ottawa, Canada | [LinkedIn](https://linkedin.com/company/3stech)

*Business Intelligence & Data Analysis | Cognos → Power BI Platform Migration Specialists*