import Link from 'next/link'

export default function CTAStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to modernize your analytics?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Request a 60-minute migration review. We'll assess your Cognos environment 
          and provide a detailed roadmap.
        </p>
        <Link href="/assessment" className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-primary-700 font-semibold shadow-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-lg transform hover:scale-105 transition-all duration-200">
          Book Your Migration Review
        </Link>
      </div>
    </section>
  )
}