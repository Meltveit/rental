import React from 'react';

interface ResultDisplayProps {
  title: string;
  results: {
    label: string;
    value: string | number;
    tooltip?: string;
    highlight?: boolean;
  }[];
  isLoading?: boolean;
  error?: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  title,
  results,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return (
      <div className="result-display">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
        <div className="flex justify-center py-8">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400">Calculating results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-display">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-md">
          <p className="text-center text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="result-display">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-700 dark:text-gray-300">{result.label}</span>
              {result.tooltip && (
                <div className="relative ml-1 group">
                  <span className="cursor-help text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </span>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {result.tooltip}
                  </div>
                </div>
              )}
            </div>
            <span className={`font-medium ${result.highlight ? 'text-blue-600 dark:text-blue-400 text-lg' : 'text-gray-900 dark:text-white'}`}>
              {result.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultDisplay;