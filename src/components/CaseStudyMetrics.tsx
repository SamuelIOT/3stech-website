export default function CaseStudyMetrics() {
  const capabilities = [
    {
      number: "AI",
      label: "Powered Analysis",
      description: "Advanced dependency mapping and lineage tracking"
    },
    {
      number: "100%",
      label: "Data Accuracy",
      description: "Zero data loss guarantee with validation"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Continuous monitoring and assistance"
    },
    {
      number: "Smart",
      label: "Migration",
      description: "Secure, scalable, intelligent approach"
    }
  ]

  return (
    <section className="py-24 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Vision & Capabilities
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Built with advanced AI and industry best practices, we're ready to transform 
            your BI infrastructure with confidence and precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {capability.number}
              </div>
              <div className="text-lg font-semibold text-accent-info mb-1">
                {capability.label}
              </div>
              <div className="text-sm text-blue-200">
                {capability.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-xl text-white mb-4">
              "Ready to revolutionize BI migration with AI-assisted precision. 
              Our engineering-first approach ensures your data transformation is smart, secure, and scalable."
            </div>
            <div className="text-blue-200">
              <div className="font-semibold">3S Tech Inc.</div>
              <div className="text-sm">AI-Powered Migration Specialists</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}