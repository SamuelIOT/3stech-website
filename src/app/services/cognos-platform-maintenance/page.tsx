import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CognosPlatformMaintenance() {
  const maintenanceServices = [
    {
      title: "Platform Upgrades",
      description: "Seamless upgrades to new IBM Cognos® releases with minimal downtime",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      features: [
        "Pre-upgrade environment assessment",
        "Compatibility testing and validation",
        "Rollback strategies and contingency planning",
        "Post-upgrade performance optimization",
        "Custom content migration assistance"
      ],
      benefits: [
        "Zero business disruption during upgrades",
        "Access to latest features and security patches",
        "Improved system performance and stability",
        "Enhanced user experience with new capabilities"
      ]
    },
    {
      title: "System Administration",
      description: "Comprehensive platform configuration and ongoing administrative support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "User access management and security configuration",
        "Performance monitoring and tuning",
        "Environment configuration and optimization",
        "Backup and disaster recovery management",
        "Integration with enterprise systems"
      ],
      benefits: [
        "Optimized system performance",
        "Enhanced security and compliance",
        "Reduced administrative overhead",
        "Proactive issue prevention and resolution"
      ]
    },
    {
      title: "Report Modernization",
      description: "Update and enhance existing reports to meet new business requirements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
        </svg>
      ),
      features: [
        "Requirements analysis and gap assessment",
        "Report redesign and layout optimization",
        "Data model enhancements and new metrics",
        "Performance improvements and query optimization",
        "Mobile-responsive design implementation"
      ],
      benefits: [
        "Enhanced user experience and usability",
        "Improved report performance and accuracy",
        "Better alignment with business objectives",
        "Future-ready reporting capabilities"
      ]
    },
    {
      title: "User Support & Training",
      description: "Comprehensive end-user support and training programs with AI assistance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        "24/7 AI-powered help desk and chatbot support",
        "Customized training programs for all user levels",
        "Interactive documentation and tutorials",
        "Best practices workshops and knowledge sharing",
        "Intelligent troubleshooting and self-service tools"
      ],
      benefits: [
        "Faster issue resolution with AI assistance",
        "Improved user adoption and satisfaction",
        "Reduced support ticket volume",
        "Enhanced organizational BI capabilities"
      ]
    }
  ]

  const aiEnhancements = [
    {
      title: "Intelligent Monitoring",
      description: "AI-powered system monitoring that predicts issues before they impact users",
      icon: "🤖"
    },
    {
      title: "Smart Optimization",
      description: "Machine learning algorithms that continuously optimize report performance",
      icon: "⚡"
    },
    {
      title: "Automated Insights",
      description: "AI-generated recommendations for system improvements and user experience",
      icon: "🧠"
    },
    {
      title: "Predictive Maintenance",
      description: "Proactive system health management using predictive analytics",
      icon: "🔮"
    }
  ]

  const supportLevels = [
    {
      level: "Essential",
      features: [
        "Monthly system health checks",
        "Quarterly security updates",
        "Basic user support (business hours)",
        "Email and ticket support",
        "Standard documentation access"
      ],
      highlight: false
    },
    {
      level: "Professional",
      features: [
        "Weekly system monitoring",
        "Priority security updates",
        "Extended user support (12 hours/day)",
        "Phone and email support",
        "Custom training materials",
        "Performance optimization reviews"
      ],
      highlight: true
    },
    {
      level: "Enterprise",
      features: [
        "24/7 AI-powered monitoring",
        "Real-time security updates",
        "24/7 dedicated support team",
        "All support channels + on-site visits",
        "Personalized training programs",
        "Continuous performance optimization",
        "Strategic consulting included"
      ],
      highlight: false
    }
  ]

  const migrationTimeline = [
    {
      phase: "Assessment",
      duration: "1-2 weeks",
      description: "Comprehensive audit of current Cognos® environment and requirements analysis"
    },
    {
      phase: "Planning",
      duration: "1 week",
      description: "Detailed maintenance strategy and upgrade roadmap development"
    },
    {
      phase: "Implementation",
      duration: "2-4 weeks",
      description: "Systematic execution of upgrades, configurations, and optimizations"
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring, support, and performance improvements"
    }
  ]

  return (
    <main>
      <Header />
      
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              IBM Cognos® Platform Maintenance
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Keep your IBM Cognos® environment running at peak performance with our comprehensive 
              maintenance services. From upgrades and configuration to user support and AI-enhanced optimization.
            </p>
          </div>

          {/* Hero Callout */}
          <div className="bg-gradient-to-r from-primary-700 to-indigo rounded-2xl p-8 text-white mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Smart, Secure, Scalable Maintenance</h2>
              <p className="text-blue-100 mb-6">
                Our AI-enhanced maintenance approach ensures your IBM Cognos® platform stays current, 
                secure, and optimized while minimizing business disruption.
              </p>
              <Link href="/assessment" className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-primary-700 font-semibold hover:bg-gray-50">
                Get Maintenance Assessment
              </Link>
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Comprehensive Maintenance Services</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {maintenanceServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 p-8">
                  <div className="flex items-start mb-6">
                    <div className="text-primary-700 mr-4 mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-700 mb-6">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">What We Do</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-slate-700 flex items-start text-sm">
                            <svg className="w-4 h-4 text-accent-success mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-slate-700 flex items-start text-sm">
                            <svg className="w-4 h-4 text-primary-700 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Enhancements */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">AI-Enhanced Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiEnhancements.map((enhancement, index) => (
                <div key={index} className="card text-center">
                  <div className="text-4xl mb-4">{enhancement.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{enhancement.title}</h3>
                  <p className="text-slate-700 text-sm">{enhancement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Levels */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Maintenance Service Levels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div key={index} className={`relative rounded-2xl border ${level.highlight ? 'border-primary-700 bg-primary-50' : 'border-slate-200 bg-white'} p-8`}>
                  {level.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">{level.level}</h3>
                  </div>
                  <ul className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-700 flex items-start text-sm">
                        <svg className="w-4 h-4 text-accent-success mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/assessment" className={`block w-full text-center rounded-2xl px-6 py-3 font-semibold transition-colors ${level.highlight ? 'bg-primary-700 text-white hover:bg-primary-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Implementation Timeline</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {migrationTimeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="card text-center">
                    <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{phase.phase}</h3>
                    <p className="text-sm text-primary-700 font-semibold mb-3">{phase.duration}</p>
                    <p className="text-slate-700 text-sm">{phase.description}</p>
                  </div>
                  {index < migrationTimeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <svg className="w-full h-2 text-slate-300" fill="currentColor" viewBox="0 0 100 2">
                        <rect width="100" height="2" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose 3S Tech for Cognos® Maintenance?</h2>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="text-primary-700 mr-2">🏆</span>
                    Deep IBM Cognos® Expertise
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• 15+ years of IBM Cognos® implementation experience</li>
                    <li>• Certified experts in all Cognos® modules and versions</li>
                    <li>• Proven track record with enterprise-scale deployments</li>
                    <li>• Industry-specific knowledge and best practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <span className="text-green-600 mr-2">🚀</span>
                    AI-Powered Innovation
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Machine learning for predictive maintenance</li>
                    <li>• AI-assisted troubleshooting and optimization</li>
                    <li>• Intelligent monitoring and alerting systems</li>
                    <li>• Future-ready platform enhancement strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Optimize Your IBM Cognos® Platform?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Get a comprehensive assessment of your current environment and a customized maintenance plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="btn-primary text-lg px-8 py-4">
                Get Platform Assessment
              </Link>
              <Link href="/assessment" className="inline-flex items-center rounded-2xl border border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}