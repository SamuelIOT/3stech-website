'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-primary-700 to-indigo-600 p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-200">
                <span className="text-white text-lg font-black">3S</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                  3S Tech Inc.
                </span>
                <div className="text-xs text-slate-500 font-medium">AI-Powered Migration</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            <div className="relative group">
              <button className="bg-slate-100 hover:bg-primary-100 text-slate-700 hover:text-primary-700 px-6 py-2.5 text-base font-semibold rounded-full border border-slate-200 hover:border-primary-300 transition-all duration-200 flex items-center">
                Services
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-80 bg-white border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-2">
                <div className="p-4">
                  <Link href="/services/cognos-to-powerbi" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-primary-700 rounded-lg transition-colors">
                    <div className="font-semibold">Migration to Power BI Platform</div>
                    <div className="text-sm text-slate-500 mt-1">Complete migration services</div>
                  </Link>
                  <Link href="/services/power-bi-platform-reports" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-primary-700 rounded-lg transition-colors">
                    <div className="font-semibold">Power BI Platform Reports</div>
                    <div className="text-sm text-slate-500 mt-1">Interactive & paginated reports with AI</div>
                  </Link>
                  <Link href="/services/cognos-platform-maintenance" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-primary-700 rounded-lg transition-colors">
                    <div className="font-semibold">Cognos Platform Maintenance</div>
                    <div className="text-sm text-slate-500 mt-1">Upgrades, configuration & support</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/process" className="bg-slate-100 hover:bg-primary-100 text-slate-700 hover:text-primary-700 px-6 py-2.5 text-base font-semibold rounded-full border border-slate-200 hover:border-primary-300 transition-all duration-200">
              Migration Process
            </Link>
            <Link href="/about" className="bg-slate-100 hover:bg-primary-100 text-slate-700 hover:text-primary-700 px-6 py-2.5 text-base font-semibold rounded-full border border-slate-200 hover:border-primary-300 transition-all duration-200">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/assessment" className="btn-primary text-base px-6 py-3">
              Get Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-primary-700 hover:bg-blue-50 p-3 rounded-lg transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-border">
              <div className="space-y-2">
                <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Services
                </div>
                <Link href="/services/cognos-to-powerbi" className="block px-4 py-3 bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 rounded-xl border border-slate-200 hover:border-primary-300 transition-all duration-200 ml-2">
                  <div className="font-semibold">Migration to Power BI Platform</div>
                  <div className="text-sm text-slate-500">Complete migration services</div>
                </Link>
                <Link href="/services/power-bi-platform-reports" className="block px-4 py-3 bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 rounded-xl border border-slate-200 hover:border-primary-300 transition-all duration-200 ml-2">
                  <div className="font-semibold">Power BI Platform Reports</div>
                  <div className="text-sm text-slate-500">Interactive & paginated reports with AI</div>
                </Link>
                <Link href="/services/cognos-platform-maintenance" className="block px-4 py-3 bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-700 rounded-xl border border-slate-200 hover:border-primary-300 transition-all duration-200 ml-2">
                  <div className="font-semibold">Cognos Platform Maintenance</div>
                  <div className="text-sm text-slate-500">Upgrades, configuration & support</div>
                </Link>
              </div>
              <Link href="/process" className="block px-6 py-3 bg-slate-100 hover:bg-primary-100 text-slate-700 hover:text-primary-700 font-semibold rounded-full border border-slate-200 hover:border-primary-300 transition-all duration-200 text-center">
                Migration Process
              </Link>
              <Link href="/about" className="block px-6 py-3 bg-slate-100 hover:bg-primary-100 text-slate-700 hover:text-primary-700 font-semibold rounded-full border border-slate-200 hover:border-primary-300 transition-all duration-200 text-center">
                About
              </Link>
              <Link href="/assessment" className="block px-6 py-3 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-full shadow-sm transition-all duration-200 text-center">
                Get Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}