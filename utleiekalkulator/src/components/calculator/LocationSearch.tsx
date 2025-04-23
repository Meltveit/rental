import React, { useState } from 'react';

interface LocationSearchProps {
  onLocationSelect: (location: LocationData) => void;
}

export interface LocationData {
  country: string;
  city: string;
  address: string;
  postalCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  propertyValue?: number;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onLocationSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<LocationData[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // This would be replaced with an actual API call to a geocoding/address search service
  const searchLocations = async (query: string): Promise<LocationData[]> => {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Demo data - in a real app, this would come from an API
    const demoResults: LocationData[] = [
      {
        country: 'Germany',
        city: 'Berlin',
        address: 'Alexanderplatz 1',
        postalCode: '10178',
        coordinates: { lat: 52.5219, lng: 13.4132 },
        propertyValue: 650000
      },
      {
        country: 'Germany',
        city: 'Berlin',
        address: 'Friedrichstraße 123',
        postalCode: '10117',
        coordinates: { lat: 52.5170, lng: 13.3889 },
        propertyValue: 720000
      },
      {
        country: 'France',
        city: 'Paris',
        address: 'Avenue des Champs-Élysées 123',
        postalCode: '75008',
        coordinates: { lat: 48.8698, lng: 2.3075 },
        propertyValue: 1250000
      }
    ];
    
    // Filter results based on the query
    return demoResults.filter(location => {
      const searchLower = query.toLowerCase();
      return (
        location.address.toLowerCase().includes(searchLower) ||
        location.city.toLowerCase().includes(searchLower) ||
        location.country.toLowerCase().includes(searchLower) ||
        location.postalCode.includes(query)
      );
    });
  };
  
  const handleSearch = async () => {
    if (!searchTerm || searchTerm.length < 3) {
      setError('Please enter at least 3 characters');
      return;
    }
    
    setError(null);
    setIsSearching(true);
    
    try {
      const results = await searchLocations(searchTerm);
      setSearchResults(results);
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };
  
  const handleLocationSelect = (location: LocationData) => {
    onLocationSelect(location);
    setSearchResults([]);
    setSearchTerm('');
  };
  
  return (
    <div className="w-full">
      <label htmlFor="location-search" className="calculator-label">
        Property Location
      </label>
      <div className="relative">
        <div className="flex">
          <input
            id="location-search"
            type="text"
            className="calculator-input flex-grow rounded-r-none"
            placeholder="Enter address, city, or postal code"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            className="calculator-btn rounded-l-none px-4"
            onClick={handleSearch}
            disabled={isSearching}
          >
            {isSearching ? (
              <span>
                <svg className="animate-spin h-5 w-5 mr-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </span>
            ) : (
              "Search"
            )}
          </button>
        </div>
        
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
        
        {searchResults.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
            <ul className="max-h-60 overflow-auto py-1">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleLocationSelect(result)}
                >
                  <div className="font-medium">{result.address}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {result.city}, {result.country}, {result.postalCode}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Start typing to search for an address across the EU
      </p>
    </div>
  );
};

export default LocationSearch;