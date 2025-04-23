import React, { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import ResultDisplay from './ResultDisplay';
import LocationSearch, { LocationData } from './LocationSearch';

interface MortgageCalculatorProps {
  isPremium?: boolean;
}

interface MortgageDetails {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  loanType: 'annuity' | 'linear';
  downPayment: number;
}

interface MortgageResults {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  effectiveInterestRate: number;
  firstYearPayments: number[];
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ isPremium = false }) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [mortgageDetails, setMortgageDetails] = useState<MortgageDetails>({
    loanAmount: 250000,
    interestRate: 3.5,
    loanTerm: 25,
    loanType: 'annuity',
    downPayment: 50000,
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<MortgageResults | null>(null);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  
  // Handle input changes
  const handleInputChange = (field: keyof MortgageDetails, value: string | number) => {
    setMortgageDetails(prev => ({
      ...prev,
      [field]: typeof value === 'string' && field !== 'loanType' ? parseFloat(value) : value,
    }));
  };
  
  // Handle location selection
  const handleLocationSelect = (selectedLocation: LocationData) => {
    setLocation(selectedLocation);
    
    // If property has a value, update loan amount and down payment
    if (selectedLocation.propertyValue) {
      const propertyValue = selectedLocation.propertyValue;
      const downPayment = Math.round(propertyValue * 0.2); // 20% down payment
      
      setMortgageDetails(prev => ({
        ...prev,
        loanAmount: propertyValue - downPayment,
        downPayment: downPayment,
      }));
    }
  };
  
  // Calculate mortgage payments
  const calculateMortgage = () => {
    setIsCalculating(true);
    setCalculationError(null);
    
    try {
      const { loanAmount, interestRate, loanTerm, loanType } = mortgageDetails;
      
      // Convert annual interest rate to monthly
      const monthlyInterestRate = interestRate / 100 / 12;
      
      // Total number of payments
      const totalPayments = loanTerm * 12;
      
      let monthlyPayment = 0;
      let totalInterest = 0;
      const firstYearPayments: number[] = [];
      
      if (loanType === 'annuity') {
        // Formula for annuity loan (equal monthly payments)
        monthlyPayment = loanAmount * 
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
          (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        
        // Calculate total interest
        totalInterest = (monthlyPayment * totalPayments) - loanAmount;
        
        // Calculate first year payments
        for (let i = 0; i < 12; i++) {
          firstYearPayments.push(parseFloat(monthlyPayment.toFixed(2)));
        }
      } else {
        // Formula for linear loan (declining payments)
        const principalPayment = loanAmount / totalPayments;
        
        // Calculate first payment
        const firstPayment = principalPayment + (loanAmount * monthlyInterestRate);
        
        // Calculate total interest (arithmetic series)
        const lastInterestPayment = principalPayment * monthlyInterestRate;
        totalInterest = ((firstPayment - principalPayment) + lastInterestPayment) * totalPayments / 2;
        
        // Use first payment as the "monthly payment" for display
        monthlyPayment = firstPayment;
        
        // Calculate first year payments
        let remainingLoan = loanAmount;
        for (let i = 0; i < 12; i++) {
          const interestPayment = remainingLoan * monthlyInterestRate;
          const payment = principalPayment + interestPayment;
          firstYearPayments.push(parseFloat(payment.toFixed(2)));
          remainingLoan -= principalPayment;
        }
      }
      
      // Calculate effective interest rate (annual)
      const effectiveInterestRate = ((Math.pow(1 + monthlyInterestRate, 12)) - 1) * 100;
      
      // Set results
      setResults({
        monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
        totalInterest: parseFloat(totalInterest.toFixed(2)),
        totalCost: loanAmount + parseFloat(totalInterest.toFixed(2)),
        effectiveInterestRate: parseFloat(effectiveInterestRate.toFixed(2)),
        firstYearPayments: firstYearPayments,
      });
      
    } catch (error) {
      console.error('Calculation error:', error);
      setCalculationError('An error occurred during calculation. Please try again.');
    } finally {
      setIsCalculating(false);
    }
  };
  
  // Format results for display
  const getFormattedResults = () => {
    if (!results) return [];
    
    const { loanType } = mortgageDetails;
    
    return [
      {
        label: loanType === 'annuity' ? 'Monthly Payment' : 'First Monthly Payment',
        value: `€${results.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
        highlight: true,
        tooltip: loanType === 'linear' ? 'Payments will decrease over time' : undefined,
      },
      {
        label: 'Total Interest',
        value: `€${results.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
      },
      {
        label: 'Total Cost of Loan',
        value: `€${results.totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
      },
      {
        label: 'Effective Annual Interest Rate',
        value: `${results.effectiveInterestRate}%`,
        tooltip: 'Annual equivalent of the monthly rate with compounding',
      },
      {
        label: 'Loan-to-Value Ratio',
        value: location?.propertyValue 
          ? `${Math.round((mortgageDetails.loanAmount / location.propertyValue) * 100)}%`
          : 'N/A',
        tooltip: 'Loan amount divided by property value',
      }
    ];
  };
  
  return (
    <div>
      <div className="calculator-card">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          EU Mortgage Calculator
        </h2>
        
        {!isPremium && (
          <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-md">
            <p className="text-sm text-yellow-700 dark:text-yellow-500">
              You're using the free version. Upgrade to Premium for detailed amortization schedules and country-specific lending options.
            </p>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Optional Property Selection */}
          <div>
            <h3 className="calculator-label mb-2">Property Information (Optional)</h3>
            <p className="text-sm text-gray-500 mb-4">
              Select a property to automatically calculate loan amount based on value
            </p>
            <LocationSearch onLocationSelect={handleLocationSelect} />
            
            {location && (
              <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-md">
                <p className="text-sm text-green-700 dark:text-green-500">
                  Selected: {location.address}, {location.city}, {location.country}
                  {location.propertyValue && ` - Estimated Value: €${location.propertyValue.toLocaleString()}`}
                </p>
              </div>
            )}
          </div>
          
          {/* Loan Details */}
          <div>
            <h3 className="calculator-label mb-2">Loan Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CalculatorInput
                id="loan-amount"
                label="Loan Amount"
                type="number"
                value={mortgageDetails.loanAmount}
                onChange={(value) => handleInputChange('loanAmount', value)}
                min={10000}
                max={10000000}
                step={10000}
                prefix="€"
                required
              />
              
              <CalculatorInput
                id="down-payment"
                label="Down Payment"
                type="number"
                value={mortgageDetails.downPayment}
                onChange={(value) => handleInputChange('downPayment', value)}
                min={0}
                max={10000000}
                step={1000}
                prefix="€"
              />
              
              <CalculatorInput
                id="interest-rate"
                label="Interest Rate"
                type="number"
                value={mortgageDetails.interestRate}
                onChange={(value) => handleInputChange('interestRate', value)}
                min={0.1}
                max={20}
                step={0.1}
                suffix="%"
                required
              />
              
              <CalculatorInput
                id="loan-term"
                label="Loan Term"
                type="number"
                value={mortgageDetails.loanTerm}
                onChange={(value) => handleInputChange('loanTerm', value)}
                min={1}
                max={40}
                step={1}
                suffix="years"
                required
              />
              
              <CalculatorInput
                id="loan-type"
                label="Loan Type"
                type="select"
                value={mortgageDetails.loanType}
                onChange={(value) => handleInputChange('loanType', value)}
                options={[
                  { value: 'annuity', label: 'Annuity (Equal Payments)' },
                  { value: 'linear', label: 'Linear (Declining Payments)' }
                ]}
                helpText="Annuity has equal payments while linear has decreasing payments"
              />
            </div>
          </div>
          
          {/* Calculate Button */}
          <div className="pt-4">
            <button
              onClick={calculateMortgage}
              disabled={isCalculating}
              className="w-full calculator-btn py-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </>
              ) : (
                "Calculate Mortgage"
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Display */}
      {(results || isCalculating || calculationError) && (
        <div className="mt-8">
          <ResultDisplay
            title="Mortgage Calculation Results"
            results={getFormattedResults()}
            isLoading={isCalculating}
            error={calculationError}
          />
          
          {/* First Year Payments (Simple Chart) */}
          {results && results.firstYearPayments.length > 0 && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                First Year Monthly Payments
              </h3>
              <div className="h-48">
                <div className="flex h-40 items-end justify-between">
                  {results.firstYearPayments.map((payment, index) => {
                    const maxPayment = Math.max(...results.firstYearPayments);
                    const height = (payment / maxPayment) * 100;
                    
                    return (
                      <div key={index} className="relative flex flex-col items-center">
                        <div 
                          className="w-6 md:w-8 bg-blue-500 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="absolute bottom-full mb-1 text-xs">
                          €{payment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {index + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">
                  Month
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Premium Feature Promotion */}
      {!isPremium && results && (
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Get More with Premium
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upgrade to Premium for detailed amortization tables, country-specific lending terms, and comprehensive investment analysis.
          </p>
          <a 
            href="/premium" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upgrade to Premium
          </a>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;