import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Migration Assessment | 3S Tech Inc.',
  description: 'Get a comprehensive Cognos to Power BI Platform migration assessment. Expert evaluation, detailed roadmap, and risk analysis delivered within 48 hours.',
  keywords: 'Cognos assessment, Power BI migration, BI assessment, Cognos evaluation, migration planning',
}

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}