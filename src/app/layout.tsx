import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '3S Tech Inc. - IBM Cognos® to Power BI Platform Migration Specialists',
  description: '3S Tech Inc. migrates IBM Cognos® to the Microsoft Power BI Platform—audited, governed, and pixel-perfect. From assessment to cutover, we deliver secure, scalable analytics.',
  keywords: 'IBM Cognos to Power BI migration, Power BI Platform, Power BI Paginated Reports, BI modernization, RLS in Power BI, report validation, governance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg min-h-screen">{children}</body>
    </html>
  )
}