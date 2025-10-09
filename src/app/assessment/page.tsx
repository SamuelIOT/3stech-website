'use client'

import Link from 'next/link'
import { Metadata } from 'next'
import { useState } from 'react'

// Note: Metadata export should be in a separate layout.tsx or moved to server component
// For now, we'll handle SEO differently since this needs to be a client component

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  role: string
  cognosVersion: string
  reportCount: string
  fmModels: string
  dataSources: string
  businessSector: string
  timeline: string
  budget: string
  challenges: string
  powerBIExperience: string
}

export default function AssessmentPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    cognosVersion: '',
    reportCount: '',
    fmModels: '',
    dataSources: '',
    businessSector: '',
    timeline: '',
    budget: '',
    challenges: '',
    powerBIExperience: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        const emailInfo = result.confirmationEmailSent 
          ? 'A confirmation email has been sent to your inbox.' 
          : 'Assessment saved successfully. Email confirmation may be delayed.'
        setSubmitMessage(`Assessment request submitted successfully! ${emailInfo} We'll respond within 1 business day.`)
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          cognosVersion: '',
          reportCount: '',
          fmModels: '',
          dataSources: '',
          businessSector: '',
          timeline: '',
          budget: '',
          challenges: '',
          powerBIExperience: '',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to submit assessment request. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Get Migration Assessment
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
              Get a comprehensive evaluation of your current environment and detailed roadmaps for your business intelligence transformation.
            </p>
            
            {/* Three Assessment Types */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Migration to Power BI Platform</h3>
                  <p className="text-blue-100 text-sm">Complete migration strategy from IBM Cognos® to Microsoft Power BI Platform</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Assessment to Upgrading Cognos</h3>
                  <p className="text-blue-100 text-sm">Evaluation and roadmap for upgrading your existing IBM Cognos® environment</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Assessment to Upgrading Power BI Platform</h3>
                  <p className="text-blue-100 text-sm">Optimization and enhancement strategy for your existing Power BI environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="assessment-form" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Assessment Request Form
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Tell us about your current BI system and environment. We'll respond promptly with your customized assessment plan.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">{submitMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">{submitMessage}</p>
                    </div>
                  </div>
                </div>
              )}
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john.smith@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Acme Corporation"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="cio">CIO / Chief Information Officer</option>
                    <option value="director">Director of Analytics / IT</option>
                    <option value="bi-manager">BI Manager</option>
                    <option value="report-author">Report Author</option>
                    <option value="power-user">Power User</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Environment Details */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Current Cognos Environment</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cognosVersion" className="block text-sm font-semibold text-slate-900 mb-2">
                      Cognos Version
                    </label>
                    <select
                      id="cognosVersion"
                      name="cognosVersion"
                      value={formData.cognosVersion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select version</option>
                      <option value="11.2">IBM Cognos Analytics 11.2</option>
                      <option value="11.1">IBM Cognos Analytics 11.1</option>
                      <option value="11.0">IBM Cognos Analytics 11.0</option>
                      <option value="10.2">IBM Cognos BI 10.2</option>
                      <option value="10.1">IBM Cognos BI 10.1</option>
                      <option value="older">Older version</option>
                      <option value="unknown">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reportCount" className="block text-sm font-semibold text-slate-900 mb-2">
                      Number of Reports *
                    </label>
                    <select
                      id="reportCount"
                      name="reportCount"
                      value={formData.reportCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="1-25">1-25 reports</option>
                      <option value="26-50">26-50 reports</option>
                      <option value="51-100">51-100 reports</option>
                      <option value="101-250">101-250 reports</option>
                      <option value="251-500">251-500 reports</option>
                      <option value="500+">500+ reports</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="fmModels" className="block text-sm font-semibold text-slate-900 mb-2">
                      Framework Manager (FM) Models
                    </label>
                    <select
                      id="fmModels"
                      name="fmModels"
                      value={formData.fmModels}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select count</option>
                      <option value="1-5">1-5 models</option>
                      <option value="6-10">6-10 models</option>
                      <option value="11-25">11-25 models</option>
                      <option value="25+">25+ models</option>
                      <option value="none">No FM models</option>
                      <option value="unknown">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dataSources" className="block text-sm font-semibold text-slate-900 mb-2">
                      Primary Data Sources
                    </label>
                    <select
                      id="dataSources"
                      name="dataSources"
                      value={formData.dataSources}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select primary source</option>
                      <option value="sql-server">SQL Server</option>
                      <option value="oracle">Oracle</option>
                      <option value="db2">IBM DB2</option>
                      <option value="postgresql">PostgreSQL</option>
                      <option value="mysql">MySQL</option>
                      <option value="sap">SAP</option>
                      <option value="multiple">Multiple sources</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="businessSector" className="block text-sm font-semibold text-slate-900 mb-2">
                    Business Sector
                  </label>
                  <select
                    id="businessSector"
                    name="businessSector"
                    value={formData.businessSector}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select sector</option>
                    <option value="public">Public Sector / Government</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="education">Education</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Project Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
                      Desired Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 30 days)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-900 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select range (optional)</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                      <option value="unknown">Need estimation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Additional Information</h3>
                
                <div>
                  <label htmlFor="challenges" className="block text-sm font-semibold text-slate-900 mb-2">
                    Current Challenges & Migration Goals
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell us about your current challenges with Cognos and what you hope to achieve with Power BI Platform migration. Include any specific requirements like paginated reports, row-level security, or performance issues."
                  ></textarea>
                </div>

                <div className="mt-6">
                  <label htmlFor="powerBIExperience" className="block text-sm font-semibold text-slate-900 mb-2">
                    Current Power BI Experience
                  </label>
                  <select
                    id="powerBIExperience"
                    name="powerBIExperience"
                    value={formData.powerBIExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="none">No Power BI experience</option>
                    <option value="basic">Basic Power BI usage</option>
                    <option value="intermediate">Intermediate Power BI skills</option>
                    <option value="advanced">Advanced Power BI users</option>
                    <option value="enterprise">Enterprise Power BI deployment</option>
                  </select>
                </div>
              </div>

              {/* Privacy & Submit */}
              <div className="border-t pt-8">
                <div className="mb-6">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                    />
                    <span className="text-sm text-slate-700">
                      I agree to receive communications from 3S Tech Inc. regarding my assessment request. 
                      We respect your privacy and will not share your information with third parties. *
                    </span>
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary text-lg px-12 py-4 font-semibold ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Request My Assessment'
                    )}
                  </button>
                  <p className="mt-4 text-sm text-slate-600">
                    We'll respond within 1 business day with your assessment timeline and next steps.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Your comprehensive migration assessment includes everything you need to plan and budget your Cognos to Power BI Platform migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Inventory</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Complete report catalog analysis</li>
                <li>• Framework Manager model mapping</li>
                <li>• Data source dependencies</li>
                <li>• User access & security review</li>
                <li>• Usage patterns & performance metrics</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Migration Roadmap</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Phased migration strategy</li>
                <li>• Detailed timeline & milestones</li>
                <li>• Resource requirements</li>
                <li>• Risk assessment & mitigation</li>
                <li>• Budget estimates & ROI projections</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Power BI architecture design</li>
                <li>• Paginated reports strategy</li>
                <li>• Row-Level Security (RLS) mapping</li>
                <li>• Integration requirements</li>
                <li>• Performance optimization plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Assessment FAQ
            </h2>
            <p className="text-xl text-slate-700">
              Common questions about our migration assessment process.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">How long does the assessment take?</h3>
                  <p className="text-slate-700">
                    The initial assessment review takes 2-5 business days depending on your environment complexity. 
                    We'll schedule a 60-minute consultation within 48 hours of receiving your request to discuss 
                    preliminary findings and next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What access do you need to our Cognos environment?</h3>
                  <p className="text-slate-700">
                    For the initial assessment, we work with exported metadata and documentation you provide. 
                    We don't require direct access to your production systems. Our team will guide you through 
                    the specific exports and information needed for a comprehensive evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Is there a cost for the assessment?</h3>
                  <p className="text-slate-700">
                    The initial assessment consultation is complimentary. For detailed assessments requiring 
                    significant analysis time (typically environments with 100+ reports), we offer comprehensive 
                    paid assessments that can be credited toward your migration project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What if we decide not to proceed with migration?</h3>
                  <p className="text-slate-700">
                    No obligation. The assessment provides valuable insights into your current environment 
                    and migration options. Many organizations use our assessment to inform their internal 
                    planning and timeline decisions, regardless of whether they proceed immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Why Work With Us */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Why Work With Us?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-700 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Engineering-First</h3>
                    <p className="text-slate-700">We show our work, match logic, and document every assumption.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-700 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Risk Mitigation</h3>
                    <p className="text-slate-700">De-risk your migration with proven methodologies and comprehensive testing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-700 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Results</h3>
                    <p className="text-slate-700">Industry-leading migration methodologies based on research and best practices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Ottawa, Canada</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:3stech.inc@gmail.com" className="text-primary-700 hover:underline">3stech.inc@gmail.com</a>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary-700 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>We respond within 1 business day</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">What Happens Next?</h3>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-start">
                      <span className="bg-primary-700 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                      <span>We review your assessment within 24 hours</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary-700 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                      <span>Schedule 60-minute consultation call</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary-700 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                      <span>Receive detailed migration roadmap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}