import React from 'react';

interface CalculatorInputProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select';
  value: string | number;
  onChange: (value: string | number) => void;
  min?: number;
  max?: number;
  step?: number;
  options?: Array<{
    value: string;
    label: string;
  }>;
  helpText?: string;
  prefix?: string;
  suffix?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  min,
  max,
  step,
  options,
  helpText,
  prefix,
  suffix,
  required = false,
  placeholder,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
    onChange(newValue);
  };

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className="calculator-label">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 dark:text-gray-400">{prefix}</span>
          </div>
        )}

        {type === 'select' ? (
          <select
            id={id}
            className={`calculator-input ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-10' : ''}`}
            value={value.toString()}
            onChange={handleChange}
            required={required}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            className={`calculator-input ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-10' : ''}`}
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            required={required}
            placeholder={placeholder}
          />
        )}

        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-500 dark:text-gray-400">{suffix}</span>
          </div>
        )}
      </div>

      {helpText && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helpText}</p>
      )}
    </div>
  );
};

export default CalculatorInput;