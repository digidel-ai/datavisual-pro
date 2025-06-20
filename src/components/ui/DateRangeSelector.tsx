import React from 'react';
import { useDateRange } from '../../context/DateRangeContext';
import { cn } from '../../utils/cn';

interface DateRangeSelectorProps {
  showExtendedOptions?: boolean;
  className?: string;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ 
  showExtendedOptions = false,
  className,
}) => {
  const { dateRange, setDateRange } = useDateRange();

  const options = [
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: 'thisMonth', label: 'This Month' },
    { value: 'lastMonth', label: 'Last Month' },
  ];

  const extendedOptions = [
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '12months', label: 'Last 12 Months' },
  ];

  const allOptions = showExtendedOptions ? [...options, ...extendedOptions] : options;

  return (
    <div className={cn("flex flex-wrap gap-2 mb-6", className)}>
      {allOptions.map((option) => (
        <button
          key={option.value}
          className={`btn text-sm transition-all duration-300 ${
            dateRange === option.value 
              ? 'btn-primary scale-105' 
              : 'btn-outline hover:scale-105'
          }`}
          onClick={() => setDateRange(option.value as any)}
        >
          {option.label}
        </button>
      ))}
      <button
        className={`btn text-sm transition-all duration-300 ${
          dateRange === 'custom' 
            ? 'btn-primary scale-105' 
            : 'btn-outline hover:scale-105'
        }`}
        onClick={() => setDateRange('custom')}
      >
        Custom Range
      </button>
    </div>
  );
};

export default DateRangeSelector;