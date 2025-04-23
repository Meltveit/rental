import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">EURentalIndex</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The leading tool for property investors and landlords in the EU to calculate rental prices, 
              manage rental properties, and analyze profitability.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/rental-calculator"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Rental Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/mortgage-calculator"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/premium"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Premium Features
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Questions? Contact our support team:
            </p>
            <a 
              href="mailto:support@eurentalindex.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              support@eurentalindex.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} EURentalIndex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;