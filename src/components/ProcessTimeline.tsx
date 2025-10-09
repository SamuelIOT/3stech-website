export default function ProcessTimeline() {
  const steps = [
    {
      title: "Analysis",
      description: "Full Cognos platform assessment: source data, report specs, queries, relationships/joins, parameters, security settings (including RLS mappings), scheduling, lineage, report design, SQL, packages, and Framework Manager (FM) models."
    },
    {
      title: "Plan", 
      description: "Define scope, priorities, milestones, and budget; create a migration roadmap and risk register."
    },
    {
      title: "Design",
      description: "Blueprint report layouts, UI patterns, Views/Tables strategy (in DB), parameter strategy, and model governance."
    },
    {
      title: "Development",
      description: "Set up Power BI environments (workspaces, pipelines); build Power BI standard interactive and Paginated (RDL) reports; implement parameters, UI, and datasets."
    },
    {
      title: "Testing",
      description: "Structured validation with user input sessions and formal UAT; parity checks against Cognos, performance testing, and security validation."
    },
    {
      title: "Maintenance",
      description: "Documentation, knowledge transfer, support SLAs, and continuous improvement."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            End-to-end migrations from IBM Cognos to Microsoft Power BI Platform. 
            Inventory, mapping, model design, DAX, paginated layouts, testing, and governance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative">
            {steps.map((step, index) => (
              <li key={index} className="relative pl-8 pb-12 last:pb-0">
                <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-indigo flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                </span>
                {index < steps.length - 1 && (
                  <span className="absolute left-2 top-6 h-full w-px bg-border"></span>
                )}
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg text-sm text-primary-700">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            AI assistance at every step
          </div>
        </div>
      </div>
    </section>
  )
}