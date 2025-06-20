import { DateRangeType } from '../context/DateRangeContext';
import { addDays, subDays, format, startOfMonth, endOfMonth, subMonths } from 'date-fns';

// Helper function to generate random numbers within a range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to generate percentage change
const generateChange = (baseValue: number, range: DateRangeType): number => {
  const multiplier = range === '7days' ? 0.15 : 
                    range === '30days' ? 0.25 :
                    range === 'thisMonth' ? 0.2 :
                    range === 'lastMonth' ? 0.3 : 0.35;
                    
  return Number((baseValue * multiplier * (Math.random() > 0.5 ? 1 : -1)).toFixed(1));
};

// Generate traffic data points
const generateTrafficData = (range: DateRangeType) => {
  const today = new Date();
  const dataPoints = [];
  let numPoints;

  switch (range) {
    case '7days':
      numPoints = 7;
      break;
    case '30days':
      numPoints = 30;
      break;
    case '3months':
      numPoints = 90;
      break;
    case '6months':
      numPoints = 180;
      break;
    case '12months':
      numPoints = 365;
      break;
    default:
      numPoints = 30;
  }

  for (let i = numPoints - 1; i >= 0; i--) {
    const date = subDays(today, i);
    dataPoints.push({
      date: format(date, 'MMM dd'),
      organic: randomInRange(800, 1200),
      paid: randomInRange(400, 800),
      direct: randomInRange(200, 400),
    });
  }

  return dataPoints;
};

// Generate dashboard stats
const generateDashboardStats = (range: DateRangeType) => {
  const baseStats = {
    organicTraffic: randomInRange(12000, 18000),
    totalLeads: randomInRange(200, 300),
    costPerLead: randomInRange(25, 40),
    topKeywords: randomInRange(20, 35),
  };

  return {
    organicTraffic: {
      value: baseStats.organicTraffic,
      change: generateChange(baseStats.organicTraffic, range),
    },
    totalLeads: {
      value: baseStats.totalLeads,
      change: generateChange(baseStats.totalLeads, range),
    },
    costPerLead: {
      value: baseStats.costPerLead,
      change: generateChange(baseStats.costPerLead, range),
    },
    topKeywords: {
      value: baseStats.topKeywords,
      change: generateChange(baseStats.topKeywords, range),
    },
  };
};

// Generate lead sources data
const generateLeadSourcesData = (range: DateRangeType) => {
  return [
    { name: 'Organic Search', value: randomInRange(35, 55) },
    { name: 'Paid Search', value: randomInRange(20, 30) },
    { name: 'Direct', value: randomInRange(10, 20) },
    { name: 'Referral', value: randomInRange(5, 15) },
    { name: 'Social', value: randomInRange(3, 8) },
  ];
};

// Generate keywords performance data
const generateKeywordsData = (range: DateRangeType) => {
  const keywords = [
    'roof repair cost',
    'roof replacement cost',
    'emergency roof repair',
    'roofing contractors near me',
    'commercial roofing services',
    'metal roofing installation',
    'roof leak repair',
    'roof inspection',
  ];

  return keywords.map(keyword => ({
    keyword,
    currentRank: randomInRange(1, 10),
    previousRank: randomInRange(1, 15),
    searchVolume: randomInRange(5000, 20000),
    difficulty: ['Low', 'Medium', 'High'][randomInRange(0, 2)],
  })).map(item => ({
    ...item,
    rankChange: item.previousRank - item.currentRank,
  }));
};

// Main mock data generator function
export const generateMockData = (
  range: DateRangeType,
  customDateRange: { startDate: Date | null; endDate: Date | null }
) => {
  return {
    dashboardStats: generateDashboardStats(range),
    trafficData: generateTrafficData(range),
    leadSourcesData: generateLeadSourcesData(range),
    keywordsData: generateKeywordsData(range),
  };
};