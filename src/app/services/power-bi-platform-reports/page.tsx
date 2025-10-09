import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PowerBIPlatformReports() {
  const reportTypes = [
    {
      title: "Interactive Reports",
      subtitle: "Power BI Desktop",
      description: "Dynamic dashboards and interactive visualizations for modern business intelligence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
        </svg>
      ),
      features: [
        "Real-time data visualization",
        "Cross-filtering and drill-down",
        "Mobile-responsive design",
        "Interactive parameters",
        "Custom visuals and R/Python integration"
      ],
      useCases: [
        "Executive dashboards",
        "Sales performance tracking",
        "Operational KPI monitoring",
        "Self-service analytics"
      ]
    },
    {
      title: "Paginated Reports",
      subtitle: "Power BI Report Builder",
      description: "Pixel-perfect reports for invoices, statements, and regulatory compliance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        "Fixed layouts and precise formatting",
        "Headers, footers, and page breaks",
        "Multiple export formats (PDF, Excel, Word)",
        "Subreports and complex data relationships",
        "Scheduled delivery and distribution"
      ],
      useCases: [
        "Financial statements",
        "Invoices and billing statements", 
        "Regulatory compliance reports",
        "Operational reports with fixed layouts"
      ]
    },
    {
      title: "AI-Enhanced Reports",
      subtitle: "Copilot Integration",
      description: "Next-generation reporting with AI assistance for insights and automation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Natural language report creation",
        "Automated insight generation",
        "Smart data visualization suggestions",
        "Anomaly detection and alerting",
        "Predictive analytics integration"
      ],
      useCases: [
        "Automated monthly reports",
        "Intelligent data storytelling",
        "Predictive forecasting reports",
        "Anomaly detection dashboards"
      ]
    }
  ]

  return (
    <main>
      <Header />
      
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Power BI Platform Reports
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Complete reporting solutions including interactive dashboards, pixel-perfect paginated reports, 
              and AI-enhanced analytics. All the power of modern business intelligence in one unified platform.
            </p>
          </div>

          {/* Hero Callout */}
          <div className="bg-gradient-to-r from-primary-700 to-indigo rounded-2xl p-8 text-white mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Three Reporting Approaches, One Platform</h2>
              <p className="text-blue-100 mb-6">
                Whether you need Interactive Reports, Paginated Reports, or AI-powered insights, 
                we deliver comprehensive reporting solutions that exceed your current capabilities.
              </p>
              <Link href="/assessment" className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-primary-700 font-semibold hover:bg-gray-50">
                Get Platform Assessment
              </Link>
            </div>
          </div>

          {/* Report Types */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Report Types & Capabilities</h2>
            <div className="space-y-12">
              {reportTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="text-primary-700 mr-4 mt-1">
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{type.title}</h3>
                        <p className="text-lg text-primary-700 font-semibold mb-3">{type.subtitle}</p>
                        <p className="text-slate-700 mb-6">{type.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="text-slate-700 flex items-start">
                              <svg className="w-5 h-5 text-accent-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Common Use Cases</h4>
                        <ul className="space-y-2">
                          {type.useCases.map((useCase, idx) => (
                            <li key={idx} className="text-slate-700 flex items-start">
                              <svg className="w-5 h-5 text-primary-700 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Modernize Your Reporting Platform?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Get a comprehensive assessment of your current reports and a roadmap for your Power BI Platform migration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="btn-primary text-lg px-8 py-4">
                Get Platform Assessment
              </Link>
              <Link href="/assessment" className="inline-flex items-center rounded-2xl border border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo">
                View Sample Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}