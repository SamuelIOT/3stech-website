import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services/cognos-to-powerbi" className="hover:text-white transition-colors">
                  Migration to Power BI Platform
                </Link>
              </li>
              <li>
                <Link href="/services/power-bi-platform-reports" className="hover:text-white transition-colors">
                  Power BI Platform Reports
                </Link>
              </li>
              <li>
                <Link href="/services/cognos-platform-maintenance" className="hover:text-white transition-colors">
                  Cognos Platform Maintenance
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Migration Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-slate-400 space-y-2">
              <p>Ottawa, Canada</p>
              <p>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </p>
              <p>
                <a 
                  href="mailto:3stech.inc@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  3stech.inc@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 3S Tech Inc. · Business Intelligence & Data Analysis · Ottawa, Canada
          </div>
          <div className="text-slate-400 text-sm">
            <span className="mr-4">Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}