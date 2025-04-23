import React, { useState } from 'react';
import LocationSearch, { LocationData } from './LocationSearch';
import CalculatorInput from './CalculatorInput';
import ResultDisplay from './ResultDisplay';

interface RentalCalculatorProps {
  isPremium?: boolean;
}

interface PropertyDetails {
  type: string;
  size: number;
  amenities: {
    furnished: boolean;
    balcony: boolean;
    parking: boolean;
    elevator: boolean;
    petFriendly: boolean;
  };
}

const RentalCalculator: React.FC<RentalCalculatorProps> = ({ isPremium = false }) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>({
    type: 'apartment',
    size: 70,
    amenities: {
      furnished: false,
      balcony: false,
      parking: false,
      elevator: false,
      petFriendly: false,
    },
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  
  // Handler for property type change
  const handlePropertyTypeChange = (value: string | number) => {
    setPropertyDetails(prev => ({
      ...prev,
      type: value as string,
    }));
  };
  
  // Handler for property size change
  const handlePropertySizeChange = (value: string | number) => {
    setPropertyDetails(prev => ({
      ...prev,
      size: value as number,
    }));
  };
  
  // Handler for amenity toggle
  const handleAmenityChange = (amenity: keyof PropertyDetails['amenities']) => {
    setPropertyDetails(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity],
      },
    }));
  };
  
  // Calculate rental price - in a real app, this would call an API
  const calculateRentalPrice = async () => {
    if (!location) {
      setCalculationError('Please select a location');
      return;
    }
    
    setIsCalculating(true);
    setCalculationError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Dummy calculation logic - replace with actual API call
      const basePrice = location.propertyValue ? location.propertyValue * 0.005 / 12 : 1000;
      
      // Adjust for property type
      let adjustedPrice = basePrice;
      if (propertyDetails.type === 'house') {
        adjustedPrice *= 0.95; // Houses often have slightly lower per-sqm rates
      } else if (propertyDetails.type === 'townhouse') {
        adjustedPrice *= 0.97;
      }
      
      // Adjust for size
      adjustedPrice = adjustedPrice * (propertyDetails.size / 100);
      
      // Adjust for amenities
      if (propertyDetails.amenities.furnished) adjustedPrice *= 1.15;
      if (propertyDetails.amenities.balcony) adjustedPrice *= 1.08;
      if (propertyDetails.amenities.parking) adjustedPrice *= 1.05;
      if (propertyDetails.amenities.elevator) adjustedPrice *= 1.03;
      if (propertyDetails.amenities.petFriendly) adjustedPrice *= 1.02;
      
      // Create price range
      const minPrice = Math.round(adjustedPrice * 0.92);
      const maxPrice = Math.round(adjustedPrice * 1.08);
      
      // Calculate ROI data
      const annualRent = adjustedPrice * 12;
      const propertyValue = location.propertyValue || 300000;
      const grossYield = (annualRent / propertyValue) * 100;
      
      // Set results
      setResults({
        estimatedRent: Math.round(adjustedPrice),
        priceRange: { min: minPrice, max: maxPrice },
        location: location,
        propertyDetails: propertyDetails,
        roi: {
          annualRent: Math.round(annualRent),
          propertyValue: propertyValue,
          grossYield: grossYield.toFixed(2)
        }
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
    
    return [
      {
        label: 'Estimated Monthly Rent',
        value: `€${results.estimatedRent}`,
        highlight: true,
      },
      {
        label: 'Price Range',
        value: `€${results.priceRange.min} - €${results.priceRange.max}`,
        tooltip: 'Based on market variability and property condition',
      },
      {
        label: 'Price per m²',
        value: `€${Math.round(results.estimatedRent / propertyDetails.size)}`,
      },
      {
        label: 'Annual Rental Income',
        value: `€${results.roi.annualRent}`,
      },
      {
        label: 'Estimated Property Value',
        value: `€${results.roi.propertyValue.toLocaleString()}`,
      },
      {
        label: 'Gross Rental Yield',
        value: `${results.roi.grossYield}%`,
        tooltip: 'Annual rent / property value',
      },
    ];
  };
  
  // Calculate button click handler
  const handleCalculate = () => {
    calculateRentalPrice();
  };
  
  // Handle location selection
  const handleLocationSelect = (selectedLocation: LocationData) => {
    setLocation(selectedLocation);
  };
  
  return (
    <div>
      <div className="calculator-card">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          EU Rental Price Calculator
        </h2>
        
        {!isPremium && (
          <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-md">
            <p className="text-sm text-yellow-700 dark:text-yellow-500">
              You're using the free version with historical (2024) data. Upgrade to Premium for real-time data and advanced analytics.
            </p>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Location Search */}
          <LocationSearch onLocationSelect={handleLocationSelect} />
          
          {location && (
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-md">
              <p className="text-sm text-green-700 dark:text-green-500">
                Selected: {location.address}, {location.city}, {location.country}
              </p>
            </div>
          )}
          
          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CalculatorInput
              id="property-type"
              label="Property Type"
              type="select"
              value={propertyDetails.type}
              onChange={handlePropertyTypeChange}
              options={[
                { value: 'apartment', label: 'Apartment' },
                { value: 'house', label: 'House' },
                { value: 'townhouse', label: 'Townhouse' },
              ]}
              required
            />
            
            <CalculatorInput
              id="property-size"
              label="Property Size"
              type="number"
              value={propertyDetails.size}
              onChange={handlePropertySizeChange}
              min={10}
              max={1000}
              step={1}
              suffix="m²"
              required
              helpText="Enter property size in square meters"
            />
          </div>
          
          {/* Amenities */}
          <div>
            <h3 className="calculator-label mb-2">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(propertyDetails.amenities).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <input
                    id={`amenity-${key}`}
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={value}
                    onChange={() => handleAmenityChange(key as keyof PropertyDetails['amenities'])}
                  />
                  <label htmlFor={`amenity-${key}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Calculate Button */}
          <div className="pt-4">
            <button
              onClick={handleCalculate}
              disabled={isCalculating || !location}
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
                "Calculate Rental Price"
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Display */}
      {(results || isCalculating || calculationError) && (
        <div className="mt-8">
          <ResultDisplay
            title="Rental Analysis Results"
            results={getFormattedResults()}
            isLoading={isCalculating}
            error={calculationError}
          />
        </div>
      )}
      
      {/* Premium Feature Promotion */}
      {!isPremium && results && (
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Get More with Premium
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upgrade to Premium for real-time data, advanced rental analytics, and property management tools.
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

export default RentalCalculator;