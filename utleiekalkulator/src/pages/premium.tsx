import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

const PremiumPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Premium Features | EURentalIndex</title>
        <meta name="description" content="Explore premium features for property investors and landlords across the EU" />
      </Head>

      <div className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            EURentalIndex Premium
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Advanced tools for property investors and landlords across the European Union
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl overflow-hidden shadow-xl mb-16">
          <div className="px-8 py-12 md:px-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Upgrade to Premium Today</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Get access to advanced calculators, real-time data, and comprehensive property management tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg">
                    Subscribe for €12/month
                  </button>
                  <button className="bg-blue-700 text-white hover:bg-blue-800 font-medium py-3 px-6 rounded-lg">
                    Try 14 Days Free
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent opacity-60 rounded-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold">Premium Features</span>
                      <span className="bg-blue-600 py-1 px-3 rounded-full text-sm">Included</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 mr-2 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Real-time pricing data
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 mr-2 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Advanced rental analytics
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 mr-2 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Property management dashboard
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 mr-2 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Tenant management tools
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Real-Time Data Access
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Access up-to-date rental pricing information across all EU markets. Make informed decisions with the latest data.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Daily data updates from our proprietary database</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Regional pricing variations and trends</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Historical trend analysis for your selected regions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Property Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Manage your entire property portfolio in one place. Track performance, store documents, and monitor your investments.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Add unlimited properties to your portfolio</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Upload documents, photos, and contracts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Track expenses, income, and profitability</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tenant Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Streamline tenant relationships with organized information, automated billing, and rental histories.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Store tenant contact information and documents</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Set up automatic payment reminders</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Track rental history and lease agreements</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How does the premium subscription work?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The premium subscription gives you immediate access to all advanced features for €12 per month. 
                You can cancel anytime, and we offer a 14-day free trial for new subscribers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.
                All payments are processed securely through our payment provider.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How accurate is your rental data?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our data is collected from multiple sources across the EU housing market, including 
                public listings, partner agencies, and proprietary research. Premium users get access 
                to our most current data, updated daily to reflect market changes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Can I use EURentalIndex in any EU country?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Our service covers all EU member states, with particularly detailed data for 
                major metropolitan areas and popular investment regions. We're constantly expanding 
                our coverage to include more detailed data for smaller towns and rural areas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of property investors across Europe who are using EURentalIndex Premium
            to optimize their rental properties and maximize returns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg">
              Subscribe Now
            </button>
            <Link 
              href="/rental-calculator"
              className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-8 rounded-lg"
            >
              Try Free Calculator
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPage;