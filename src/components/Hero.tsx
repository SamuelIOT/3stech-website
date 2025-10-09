import Link from 'next/link'
import DataFlowVisualization from './DataFlowVisualization'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* AI Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Migration</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Migration to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Power BI</span> with Confidence
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              End-to-end BI migration powered by AI-assisted precision. 
              We analyze every dependency, automate lineage mapping, 
              and deliver a zero data loss guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                href="/assessment" 
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-semibold shadow-lg hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 text-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Migration Assessment →
              </Link>
              <Link 
                href="/process" 
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 px-8 py-4 text-white font-semibold hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-lg backdrop-blur-sm"
              >
                View Our Process
              </Link>
            </div>
          </div>

          {/* Right visual - Data Flow Animation */}
          <div className="relative lg:block hidden">
            <DataFlowVisualization />
          </div>
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">AI</div>
            <div className="text-gray-300 text-sm">Powered Process</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 text-sm">Data Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
        </div>
      </div>
      
      {/* Trust signals */}
      <div className="mt-16 text-center">
        <p className="text-gray-300 text-sm mb-4">Trusted by organizations in</p>
        <div className="flex justify-center items-center space-x-8 text-gray-300">
          <span className="text-sm font-medium">Healthcare</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-sm font-medium">Finance</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-sm font-medium">Public Sector</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-sm font-medium">Education</span>
        </div>
      </div>
    </section>
  )
}