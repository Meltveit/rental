import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import MortgageCalculator from '../components/calculator/MortgageCalculator';

const MortgageCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mortgage Calculator | EURentalIndex</title>
        <meta name="description" content="Calculate mortgage payments and costs for property investments across the European Union" />
      </Head>

      <div className="py-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            EU Mortgage Calculator
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Calculate mortgage payments, total costs, and amortization schedules for property investments
          </p>
        </div>
        
        <MortgageCalculator />
        
        <div className="mt-12 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About Our Mortgage Calculator
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The EURentalIndex Mortgage Calculator helps property investors across the European 
              Union plan their financing with accurate payment calculations for:
            </p>
            <ul>
              <li>Monthly payment amounts for your loan</li>
              <li>Total interest costs over the full loan term</li>
              <li>Comparison between different loan types and terms</li>
              <li>Visual representation of payment schedules</li>
            </ul>
            <p>
              Our calculator supports both annuity loans (equal payments throughout the term) and 
              linear loans (declining payments), which are common mortgage structures across Europe.
            </p>
            <h3>Annuity vs. Linear Loans</h3>
            <p>
              <strong>Annuity loans</strong> maintain the same payment amount throughout the loan term.
              In the early years, a larger portion of each payment goes toward interest, while in later 
              years, more goes toward principal.
            </p>
            <p>
              <strong>Linear loans</strong> have a fixed principal repayment amount, with interest 
              calculated on the remaining balance. This results in higher initial payments that 
              gradually decrease over time as the principal is paid down.
            </p>
            <h3>Understanding Mortgage Costs</h3>
            <p>
              When planning your property investment, remember to account for additional costs beyond 
              the mortgage payment:
            </p>
            <ul>
              <li>Property taxes (which vary significantly across EU countries)</li>
              <li>Insurance costs</li>
              <li>Maintenance and repairs</li>
              <li>Homeowners association or management fees</li>
              <li>Utilities (if not paid by tenants)</li>
            </ul>
            <p className="text-sm text-gray-500 mt-8">
              Note: This calculator provides estimates for planning purposes. Actual loan terms and availability 
              will depend on your personal financial situation, credit history, and the specific lender's policies.
              We recommend consulting with a financial advisor or mortgage specialist before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MortgageCalculatorPage;