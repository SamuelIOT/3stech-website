import Hero from '@/components/Hero'
import ValueProps from '@/components/ValueProps'
import CaseStudyMetrics from '@/components/CaseStudyMetrics'
import CTAStrip from '@/components/CTAStrip'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProps />
      <CaseStudyMetrics />
      <CTAStrip />
      <Footer />
    </main>
  )
}