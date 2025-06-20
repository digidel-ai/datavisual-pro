import React, { createContext, useContext, useState, ReactNode } from 'react';
import { generateMockData } from '../utils/mockDataGenerator';

export type DateRangeType = 
  | '7days' 
  | '30days' 
  | 'thisMonth' 
  | 'lastMonth' 
  | '3months' 
  | '6months' 
  | '12months' 
  | 'custom';

interface DateRangeContextType {
  dateRange: DateRangeType;
  setDateRange: (range: DateRangeType) => void;
  customDateRange: {
    startDate: Date | null;
    endDate: Date | null;
  };
  setCustomDateRange: (range: { startDate: Date | null; endDate: Date | null }) => void;
  mockData: any; // Will be properly typed when we create the data generator
}

const DateRangeContext = createContext<DateRangeContextType | undefined>(undefined);

export const DateRangeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dateRange, setDateRange] = useState<DateRangeType>('30days');
  const [customDateRange, setCustomDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  // Generate mock data based on the selected date range
  const mockData = generateMockData(dateRange, customDateRange);

  return (
    <DateRangeContext.Provider
      value={{
        dateRange,
        setDateRange,
        customDateRange,
        setCustomDateRange,
        mockData,
      }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  if (context === undefined) {
    throw new Error('useDateRange must be used within a DateRangeProvider');
  }
  return context;
};