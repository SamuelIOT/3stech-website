import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CognosToPowerBI() {
  return (
    <main>
      <Header />
      
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Migration to Power BI Platform
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              End-to-end migrations from IBM Cognos® to Microsoft Power BI Platform. 
              Includes Standard Interactive Reports by Power BI Desktop, Paginated Reports 
              by Power BI Report Builder, and innovative AI-assisted migration methods.
            </p>
          </div>

          {/* Problem Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Opportunity</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-lg text-slate-700 mb-4">
                Organizations are increasingly evaluating cloud-native analytics platforms:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Cloud-first strategy:</strong> Organizations are modernizing to cloud-native analytics platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Skills evolution:</strong> Teams are transitioning to modern analytics tools and methodologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Performance expectations:</strong> Users expect faster, more responsive analytics experiences</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Mobile-first requirements:</strong> Modern analytics needs seamless mobile and cloud access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Ecosystem integration:</strong> Organizations benefit from unified Microsoft cloud services</span>
                </li>
              </ul>
              <p className="text-lg text-slate-700 mt-4">
                Organizations need to modernize while maintaining business continuity and ensuring 
                regulatory compliance. Strategic migration planning preserves existing investments 
                while enabling modern analytics capabilities.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Inventory</h3>
                <p className="text-slate-700">
                  Complete assessment of your Cognos environment: reports, models, 
                  data sources, security settings, and usage patterns.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Mapping</h3>
                <p className="text-slate-700">
                  Detailed mapping of Framework Manager models to Power BI datasets, 
                  ensuring logic parity and optimal performance.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Parity</h3>
                <p className="text-slate-700">
                  1:1 logic replication for key reports, maintaining pixel-perfect 
                  layouts for paginated outputs.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Cutover</h3>
                <p className="text-slate-700">
                  Seamless transition with zero downtime, comprehensive testing, 
                  and user training.
                </p>
              </div>
            </div>
          </div>

          {/* Migration Approaches */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Migration Approaches</h2>
            <p className="text-lg text-slate-700 mb-8">
              We deliver comprehensive migrations using multiple Power BI technologies and innovative methods:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Standard Interactive Reports</h3>
                <p className="text-slate-700 mb-4">
                  Built with <strong>Power BI Desktop</strong> for modern, interactive dashboards and analytics.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Interactive visualizations</li>
                  <li>• Real-time data refresh</li>
                  <li>• Mobile-optimized layouts</li>
                  <li>• Self-service analytics</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Paginated Reports</h3>
                <p className="text-slate-700 mb-4">
                  Built with <strong>Power BI Report Builder</strong> for pixel-perfect formatted reports.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Pixel-perfect layouts</li>
                  <li>• Print-ready formatting</li>
                  <li>• Regulatory compliance</li>
                  <li>• Traditional report formats</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Assisted Migration</h3>
                <p className="text-slate-700 mb-4">
                  Innovative <strong>AI-powered tools</strong> accelerate complex migrations and optimize outcomes.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Automated report analysis</li>
                  <li>• Smart mapping suggestions</li>
                  <li>• DAX code generation</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Hybrid Approach</h3>
              <p className="text-slate-700">
                Most migrations benefit from a combination of all three approaches. We analyze your Cognos environment 
                to determine the optimal mix: interactive dashboards for modern analytics, paginated reports for 
                compliance and formatted outputs, and AI assistance to accelerate complex transformations and ensure accuracy.
              </p>
            </div>
          </div>

          {/* Migration Implementation Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Migration Implementation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Assessment & Planning</h3>
                  <p className="text-slate-700 text-sm">Analyze existing IBM Cognos® reports and plan migration strategy</p>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <svg className="w-full h-2 text-slate-300" fill="currentColor" viewBox="0 0 100 2">
                    <rect width="100" height="2" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Interactive Reports</h3>
                  <p className="text-slate-700 text-sm">Migrate dashboards to Power BI Desktop with enhanced interactivity</p>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <svg className="w-full h-2 text-slate-300" fill="currentColor" viewBox="0 0 100 2">
                    <rect width="100" height="2" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Paginated Reports</h3>
                  <p className="text-slate-700 text-sm">Recreate pixel-perfect reports using Power BI Report Builder</p>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <svg className="w-full h-2 text-slate-300" fill="currentColor" viewBox="0 0 100 2">
                    <rect width="100" height="2" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="card text-center">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">AI Enhancement</h3>
                  <p className="text-slate-700 text-sm">Add AI capabilities and automated insights where beneficial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Get</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-success mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong>Inventory workbook</strong> - Complete catalog of your Cognos environment
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-success mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong>Mapping matrix</strong> - Framework Manager to Power BI dataset mappings
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-success mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong>Validation pack</strong> - Test cases and parity verification
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-success mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">
                  <strong>Operations runbooks</strong> - Documentation and maintenance procedures
                </span>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Governance & Security</h2>
            <div className="bg-blue-50 border-l-4 border-primary-700 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Row-Level Security (RLS)</h4>
                  <p className="text-slate-700">Complete parity with existing Cognos security models</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Workspace Strategy</h4>
                  <p className="text-slate-700">Organized development, test, and production environments</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Deployment Pipelines</h4>
                  <p className="text-slate-700">Automated deployment with change tracking</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Audit Trail</h4>
                  <p className="text-slate-700">Complete documentation of all changes and decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Migration Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Migration Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Unified Platform</h3>
                <p className="text-slate-700">Consolidate all reporting needs in one comprehensive Power BI environment</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cost Efficiency</h3>
                <p className="text-slate-700">Reduce licensing costs and infrastructure complexity</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Modern User Experience</h3>
                <p className="text-slate-700">Intuitive interfaces and mobile-first design for all user types</p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">AI-Powered Insights</h3>
                <p className="text-slate-700">Leverage Microsoft's AI capabilities for smarter decision making</p>
              </div>
            </div>
          </div>

          {/* Platform Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Platform Comparison</h2>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="text-red-600 mr-2">📊</span>
                    Current IBM Cognos® Environment
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Multiple separate tools for different report types</li>
                    <li>• Complex licensing and infrastructure costs</li>
                    <li>• Limited mobile experience</li>
                    <li>• Manual insight generation</li>
                    <li>• Separate data models and governance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="text-green-600 mr-2">⚡</span>
                    Unified Power BI Platform
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• All report types in one integrated platform</li>
                    <li>• Simplified licensing and cloud infrastructure</li>
                    <li>• Native mobile apps and responsive design</li>
                    <li>• AI-powered insights and automation</li>
                    <li>• Unified data model and governance framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to start your migration?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Request an inventory template and see how we can help assess your environment.
            </p>
            <Link href="/assessment" className="btn-primary text-lg px-8 py-4">
              Request Inventory Template
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}