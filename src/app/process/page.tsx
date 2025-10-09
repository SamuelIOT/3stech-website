import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Process() {
  const steps = [
    {
      title: "Analysis",
      duration: "1-2 weeks",
      objectives: [
        "Complete Cognos platform assessment",
        "Document report inventory and usage patterns",
        "Map data sources and lineage",
        "Identify security and governance requirements"
      ],
      deliverables: [
        "Inventory workbook with all reports cataloged",
        "Data source mapping and lineage documentation",
        "Security settings analysis (RLS mappings)",
        "Usage analytics and prioritization matrix"
      ],
      aiAssists: [
        "Automated report discovery and cataloging",
        "Data lineage analysis and visualization",
        "Usage pattern identification"
      ]
    },
    {
      title: "Plan", 
      duration: "1 week",
      objectives: [
        "Define migration scope and priorities",
        "Create detailed project roadmap",
        "Establish budget and resource requirements",
        "Develop risk register and mitigation strategies"
      ],
      deliverables: [
        "Migration roadmap with milestones",
        "Resource allocation plan",
        "Risk register with mitigation strategies",
        "Success criteria and KPIs"
      ],
      aiAssists: [
        "Effort estimation based on complexity analysis",
        "Risk identification and assessment",
        "Timeline optimization"
      ]
    },
    {
      title: "Design",
      duration: "2-3 weeks", 
      objectives: [
        "Blueprint Power BI architecture",
        "Design data model and governance framework",
        "Plan report layouts and UI patterns",
        "Define parameter and security strategies"
      ],
      deliverables: [
        "Power BI workspace architecture",
        "Data model design and DAX documentation",
        "Report layout specifications",
        "Security and governance framework"
      ],
      aiAssists: [
        "Optimal data model design recommendations",
        "DAX formula generation and optimization",
        "Layout pattern suggestions"
      ]
    },
    {
      title: "Development",
      duration: "4-8 weeks",
      objectives: [
        "Build Power BI environments and workspaces",
        "Develop datasets and data models",
        "Create interactive and paginated reports",
        "Implement parameters and user interface"
      ],
      deliverables: [
        "Configured Power BI workspaces",
        "Production-ready datasets",
        "Interactive and paginated reports",
        "User documentation and training materials"
      ],
      aiAssists: [
        "Automated DAX code generation",
        "Report layout automation",
        "Performance optimization suggestions"
      ]
    },
    {
      title: "Testing",
      duration: "2-3 weeks",
      objectives: [
        "Validate data accuracy and report parity",
        "Conduct user acceptance testing (UAT)",
        "Perform security and performance testing",
        "Execute end-to-end integration testing"
      ],
      deliverables: [
        "Test execution reports",
        "UAT sign-off documentation", 
        "Performance benchmarks",
        "Security validation certificates"
      ],
      aiAssists: [
        "Automated data validation and comparison",
        "Performance bottleneck identification",
        "Test case generation"
      ]
    },
    {
      title: "Maintenance",
      duration: "Ongoing",
      objectives: [
        "Provide comprehensive documentation",
        "Deliver knowledge transfer sessions",
        "Establish support SLAs",
        "Enable continuous improvement processes"
      ],
      deliverables: [
        "Complete technical documentation",
        "User training and knowledge transfer",
        "Support runbooks and procedures",
        "Continuous improvement plan"
      ],
      aiAssists: [
        "Documentation generation and maintenance",
        "Automated monitoring and alerting",
        "Performance optimization recommendations"
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
              Migration Process
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A proven 6-step methodology for migrating from IBM Cognos to Microsoft Power BI Platform. 
              Each phase includes AI assistance, clear deliverables, and measurable outcomes.
            </p>
          </div>

          {/* Process Overview */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-700 to-indigo rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">End-to-End Migration Excellence</h2>
              <p className="text-blue-100 text-lg">
                Inventory → Mapping → Model Design → DAX → Paginated Layouts → Testing → Governance
              </p>
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Header */}
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                      <span className="text-primary-700 font-semibold bg-blue-50 px-4 py-2 rounded-lg mt-2 md:mt-0">
                        {step.duration}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Objectives */}
                      <div className="card">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Objectives
                        </h3>
                        <ul className="space-y-2">
                          {step.objectives.map((objective, idx) => (
                            <li key={idx} className="text-slate-700 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary-700 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="card">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-accent-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-slate-700 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-accent-success rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Assists */}
                      <div className="card bg-blue-50 border-blue-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-indigo mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          AI Assists
                        </h3>
                        <ul className="space-y-2">
                          {step.aiAssists.map((assist, idx) => (
                            <li key={idx} className="text-slate-700 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-indigo rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {assist}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-12 bg-border"></div>
                )}
              </div>
            ))}
          </div>

          {/* Proof Points */}
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Proven Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">1:1</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Logic Replication</div>
                <div className="text-xs text-slate-600">FM model parity maintained</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">100%</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Pixel-Perfect</div>
                <div className="text-xs text-slate-600">Paginated report outputs</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">Zero</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">User Disruption</div>
                <div className="text-xs text-slate-600">Seamless cutover process</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary-700 mb-2">24/7</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Automated Monitoring</div>
                <div className="text-xs text-slate-600">AI-powered regression checks</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Migration?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Get a detailed assessment of your Cognos environment and a customized migration roadmap.
            </p>
            <Link href="/assessment" className="btn-primary text-lg px-8 py-4">
              Request Migration Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}