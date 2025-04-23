import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import RentalCalculator from '../components/calculator/RentalCalculator';

const RentalCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rental Calculator | EURentalIndex</title>
        <meta name="description" content="Calculate rental prices for properties across the European Union" />
      </Head>

      <div className="py-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            EU Rental Price Calculator
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Calculate accurate rental prices for properties across the European Union
          </p>
        </div>
        
        <RentalCalculator />
        
        <div className="mt-12 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About Our Rental Calculator
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The EURentalIndex Rental Calculator uses comprehensive data from across the 
              European Union to provide accurate rental price estimates based on:
            </p>
            <ul>
              <li>Property location and regional market conditions</li>
              <li>Property type and size</li>
              <li>Additional amenities that affect rental value</li>
            </ul>
            <p>
              Our free calculator uses historical data from 2024 to provide reliable baseline estimates.
              Premium subscribers get access to real-time market data and advanced analytics for even more
              precise calculations.
            </p>
            <h3>How We Calculate Rental Prices</h3>
            <p>
              Our proprietary algorithm analyzes thousands of rental listings across the EU to 
              determine accurate baseline prices for each location. We then apply adjustments based 
              on specific property characteristics, including:
            </p>
            <ul>
              <li>Size adjustments based on price-per-square-meter data</li>
              <li>Property type factors (apartments typically command higher per-square-meter prices)</li>
              <li>Amenity multipliers for features like furnished units or balconies</li>
              <li>Location quality factors within neighborhoods</li>
            </ul>
            <p>
              The result is a comprehensive estimate of market-rate rental prices to help landlords 
              set competitive rates and achieve optimal returns on their property investments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalCalculatorPage;