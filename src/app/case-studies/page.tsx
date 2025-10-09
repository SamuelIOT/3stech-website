import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CaseStudies() {
  const industryScenarios = [
    {
      id: 1,
      sector: "Healthcare",
      title: "Healthcare Industry Migration Patterns",
      source: "Microsoft Healthcare Analytics Case Studies",
      challenge: "Healthcare organizations typically face complex challenges when migrating from Cognos to Power BI Platform due to HIPAA compliance requirements, patient data privacy, and regulatory reporting needs.",
      commonRequirements: [
        "HIPAA-compliant row-level security implementation",
        "Patient data anonymization and governance",
        "Integration with Electronic Health Records (EHR)",
        "Quality metrics and outcome reporting",
        "Financial and operational dashboard requirements"
      ],
      typicalOutcomes: [
        "Improved data governance and security",
        "Enhanced real-time patient analytics",
        "Streamlined regulatory reporting",
        "Better integration with Microsoft ecosystem"
      ],
      keyConsiderations: [
        "Data residency and privacy requirements",
        "Integration with existing healthcare systems",
        "User training for clinical staff",
        "Audit trail and compliance documentation"
      ],
      sourceNote: "Based on Microsoft healthcare analytics transformation patterns and HIMSS digital health reports"
    },
    {
      id: 2,
      sector: "Financial Services",
      title: "Banking & Financial Services Migration Trends",
      source: "Financial Industry Regulatory Authority (FINRA) & Microsoft Financial Services",
      challenge: "Financial institutions migrating from Cognos often need to maintain strict regulatory compliance while improving reporting agility for risk management and customer analytics.",
      commonRequirements: [
        "SOX compliance and audit trail maintenance",
        "Risk reporting with real-time data integration",
        "Customer analytics and segmentation",
        "Regulatory submission automation",
        "Data lineage and governance documentation"
      ],
      typicalOutcomes: [
        "Enhanced regulatory reporting capabilities",
        "Improved risk analytics and monitoring",
        "Better customer insight generation",
        "Reduced time-to-insight for decision making"
      ],
      keyConsiderations: [
        "Data encryption and security protocols",
        "Integration with core banking systems",
        "Regulatory change management processes",
        "User access controls and monitoring"
      ],
      sourceNote: "Based on FINRA technology guidelines and Microsoft financial services transformation case studies"
    },
    {
      id: 3,
      sector: "Public Sector",
      title: "Government & Education Sector Patterns",
      source: "Microsoft Public Sector & Education Analytics Reports",
      challenge: "Public sector organizations typically require transparent reporting, citizen data privacy, and integration with existing government systems while managing budget constraints.",
      commonRequirements: [
        "Citizen data privacy and FERPA compliance",
        "Transparent public reporting dashboards",
        "Budget and performance analytics",
        "Multi-department data integration",
        "Accessibility compliance (Section 508)"
      ],
      typicalOutcomes: [
        "Improved citizen service delivery insights",
        "Enhanced budget and performance transparency",
        "Better cross-department collaboration",
        "Reduced licensing and operational costs"
      ],
      keyConsiderations: [
        "Public records and transparency requirements",
        "Budget approval and procurement processes",
        "Change management across departments",
        "Legacy system integration challenges"
      ],
      sourceNote: "Based on Microsoft public sector digital transformation reports and government analytics best practices"
    }
  ]

  return (
    <main>
      <Header />
      
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Industry Migration Insights
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Understanding Cognos to Power BI Platform migration patterns across 
              healthcare, finance, and public sector organizations.
            </p>
          </div>

          {/* Overview Metrics */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-700 to-indigo rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Industry Migration Trends</h2>
                <p className="text-blue-100">Insights from Microsoft and industry research</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-200 text-sm">Of orgs report improved analytics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-blue-200 text-sm">Faster time-to-insight</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-blue-200 text-sm">Reduced TCO average</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">6-18</div>
                  <div className="text-blue-200 text-sm">Weeks typical timeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Scenarios */}
          <div className="space-y-16">
            {industryScenarios.map((scenario) => (
              <div key={scenario.id} className="border-b border-border pb-16 last:border-b-0">
                {/* Header */}
                <div className="mb-8">
                  <div className="text-sm font-semibold text-primary-700 mb-2">{scenario.sector}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{scenario.title}</h2>
                  <div className="text-sm text-slate-600 italic">
                    Source: {scenario.source}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Common Challenges</h3>
                    <p className="text-slate-700 leading-relaxed">{scenario.challenge}</p>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Typical Requirements</h3>
                    <ul className="space-y-2">
                      {scenario.commonRequirements.map((item, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <svg className="w-5 h-5 text-primary-700 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes and Considerations */}
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Typical Outcomes</h3>
                    <div className="space-y-3">
                      {scenario.typicalOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-green-50 rounded-lg">
                          <svg className="w-5 h-5 text-accent-success mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Considerations</h3>
                    <div className="space-y-3">
                      {scenario.keyConsiderations.map((consideration, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-blue-50 rounded-lg">
                          <svg className="w-5 h-5 text-primary-700 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700">{consideration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Source Note */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600 italic">
                    <strong>Research Note:</strong> {scenario.sourceNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Plan Your Migration?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Every organization's migration journey is unique. Let us assess your specific 
              Cognos environment and provide a tailored migration strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="btn-primary text-lg px-8 py-4">
                Get Your Free Assessment
              </Link>
              <Link href="/process" className="inline-flex items-center rounded-2xl border border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo">
                View Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}