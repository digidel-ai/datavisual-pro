// Billing Data
export const billingData = {
  services: [
    {
      id: 1,
      name: 'SEO Package - Professional',
      details: 'Includes keyword tracking, content optimization, and monthly reporting',
      amount: 1499,
      type: 'Monthly',
      status: 'Active',
      nextBilling: '2024-03-01'
    },
    {
      id: 2,
      name: 'Website Maintenance',
      details: 'Security updates, backups, and performance optimization',
      amount: 299,
      type: 'Monthly',
      status: 'Active',
      nextBilling: '2024-03-01'
    },
    {
      id: 3,
      name: 'Landing Page Design',
      details: 'Custom design for winter promotion',
      amount: 799,
      type: 'One-time',
      status: 'Paid',
      nextBilling: null
    }
  ],
  invoices: [
    {
      id: 'INV-2024-001',
      date: '2024-02-01',
      amount: 1798,
      status: 'Paid',
      paidDate: '2024-02-01'
    },
    {
      id: 'INV-2024-002',
      date: '2024-01-01',
      amount: 1798,
      status: 'Paid',
      paidDate: '2024-01-01'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: 2597,
      status: 'Paid',
      paidDate: '2023-12-01'
    }
  ]
};

// Permissions Data
export const permissions = {
  admin: {
    description: 'Full system access with all capabilities',
    capabilities: [
      'Manage users and permissions',
      'Access all analytics and reports',
      'Manage billing and subscriptions',
      'Configure system settings',
      'Access audit logs'
    ]
  },
  manager: {
    description: 'Access to manage team and view analytics',
    capabilities: [
      'View and manage team members',
      'Access analytics and reports',
      'View billing information',
      'Manage campaigns'
    ]
  },
  user: {
    description: 'Basic access to view and interact with the system',
    capabilities: [
      'View assigned analytics',
      'Access basic reports',
      'View personal profile',
      'Submit support requests'
    ]
  }
};

// Users Data
export const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@mountainviewroofing.com',
    role: 'Admin',
    lastLogin: '2024-02-15 09:30 AM'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@mountainviewroofing.com',
    role: 'Manager',
    lastLogin: '2024-02-14 04:15 PM'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike@mountainviewroofing.com',
    role: 'User',
    lastLogin: '2024-02-13 11:45 AM'
  }
];

// Dashboard Stats
export const dashboardStats = {
  organicTraffic: {
    value: 15420,
    change: 12.5
  },
  totalLeads: {
    value: 245,
    change: 8.3
  },
  costPerLead: {
    value: 32,
    change: -5.2
  },
  topKeywords: {
    value: 28,
    change: 4
  }
};

// Traffic Data
export const trafficData = [
  { month: 'Jan', organic: 12000, paid: 8000 },
  { month: 'Feb', organic: 13500, paid: 8200 },
  { month: 'Mar', organic: 15000, paid: 8500 },
  { month: 'Apr', organic: 14800, paid: 8800 },
  { month: 'May', organic: 15500, paid: 9000 },
  { month: 'Jun', organic: 16200, paid: 9200 }
];

// Lead Sources Data
export const leadSourcesData = [
  { name: 'Organic Search', value: 45 },
  { name: 'Paid Search', value: 25 },
  { name: 'Direct', value: 15 },
  { name: 'Referral', value: 10 },
  { name: 'Social', value: 5 }
];

// Keywords Performance Data
export const keywordsPerformanceData = [
  {
    keyword: 'roof repair cost',
    currentRank: 3,
    previousRank: 5,
    rankChange: 2,
    searchVolume: 15000,
    difficulty: 'Medium',
  },
  {
    keyword: 'roof replacement cost',
    currentRank: 2,
    previousRank: 3,
    rankChange: 1,
    searchVolume: 12000,
    difficulty: 'High',
  },
  {
    keyword: 'emergency roof repair',
    currentRank: 1,
    previousRank: 1,
    rankChange: 0,
    searchVolume: 8000,
    difficulty: 'Medium',
  },
  {
    keyword: 'roofing contractors near me',
    currentRank: 4,
    previousRank: 7,
    rankChange: 3,
    searchVolume: 10000,
    difficulty: 'Low',
  },
  {
    keyword: 'commercial roofing services',
    currentRank: 6,
    previousRank: 4,
    rankChange: -2,
    searchVolume: 6000,
    difficulty: 'Medium',
  },
];

// Active Campaigns Data
export const activeCampaigns = [
  {
    id: 1,
    name: 'Spring Roof Maintenance',
    platform: 'Google Ads',
    impressions: 45000,
    clicks: 2800,
    conversions: 85,
    budgetUsed: 75,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Emergency Services',
    platform: 'Facebook Ads',
    impressions: 32000,
    clicks: 1900,
    conversions: 45,
    budgetUsed: 60,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Commercial Roofing',
    platform: 'LinkedIn Ads',
    impressions: 15000,
    clicks: 950,
    conversions: 28,
    budgetUsed: 90,
    status: 'Active'
  }
];

// Recent Leads Data
export const recentLeads = [
  {
    id: 1,
    date: '2024-02-15',
    name: 'John Smith',
    source: 'Organic Search',
    phone: '(555) 123-4567',
    status: 'New'
  },
  {
    id: 2,
    date: '2024-02-14',
    name: 'Sarah Johnson',
    source: 'Google Ads',
    phone: '(555) 234-5678',
    status: 'Contacted'
  },
  {
    id: 3,
    date: '2024-02-14',
    name: 'Michael Brown',
    source: 'Referral',
    phone: '(555) 345-6789',
    status: 'Qualified'
  },
  {
    id: 4,
    date: '2024-02-13',
    name: 'Emily Davis',
    source: 'Facebook Ads',
    phone: '(555) 456-7890',
    status: 'Closed Won'
  }
];

// SEO Performance Metrics
export const seoPerformanceMetrics = {
  newKeywords: {
    value: 45,
    change: 12
  },
  avgPositionChange: {
    value: 3.2,
    change: 15
  },
  pagesIndexed: {
    value: 128,
    change: 8
  },
  organicClicks: {
    value: 12500,
    change: 18
  },
  newPages: [
    {
      url: '/services/commercial-roofing',
      status: 'Indexed',
      daysToIndex: 3,
      keywordsIndexed: 12,
      newImpressions: 450,
      avgPosition: 15.2
    },
    {
      url: '/blog/roof-maintenance-tips',
      status: 'Indexing',
      daysToIndex: null,
      keywordsIndexed: 8,
      newImpressions: 280,
      avgPosition: 18.5
    },
    {
      url: '/about/certifications',
      status: 'Submitted',
      daysToIndex: null,
      keywordsIndexed: 5,
      newImpressions: 120,
      avgPosition: 22.1
    }
  ]
};

// Sitemap Structure
export const sitemapStructure = {
  'home': {
    title: 'Home',
    selected: true,
    expanded: true,
    children: {}
  },
  'services': {
    title: 'Services',
    selected: true,
    expanded: true,
    children: {
      'residential': {
        title: 'Residential Roofing',
        selected: true
      },
      'commercial': {
        title: 'Commercial Roofing',
        selected: true
      },
      'emergency': {
        title: 'Emergency Services',
        selected: true
      }
    }
  },
  'about': {
    title: 'About Us',
    selected: true,
    expanded: true,
    children: {
      'team': {
        title: 'Our Team',
        selected: true
      },
      'history': {
        title: 'Company History',
        selected: true
      }
    }
  },
  'contact': {
    title: 'Contact',
    selected: true,
    expanded: false,
    children: {}
  }
};

// Timeline Items
export const timelineItems = [
  {
    title: 'Discovery Phase',
    description: 'Initial consultation and requirements gathering',
    isCompleted: true
  },
  {
    title: 'Design Phase',
    description: 'Creating wireframes and visual designs',
    isInProgress: true
  },
  {
    title: 'Development',
    description: 'Building the website frontend and backend',
    isPending: true
  },
  {
    title: 'Content Migration',
    description: 'Moving and optimizing existing content',
    isPending: true
  },
  {
    title: 'Testing & QA',
    description: 'Comprehensive testing and bug fixes',
    isPending: true
  },
  {
    title: 'Launch',
    description: 'Final checks and website deployment',
    isPending: true
  }
];

// Reputation Metrics
export const reputationMetrics = {
  averageRating: {
    value: 4.8,
    change: 0.2
  },
  totalReviews: {
    value: 256,
    change: 15
  },
  responseRate: {
    value: '95%',
    change: 5
  },
  sentimentScore: {
    value: '92%',
    change: 3
  }
};

// Review Trend Data
export const reviewTrendData = [
  { month: 'Jan', reviews: 35, rating: 4.7 },
  { month: 'Feb', reviews: 42, rating: 4.8 },
  { month: 'Mar', reviews: 38, rating: 4.6 },
  { month: 'Apr', reviews: 45, rating: 4.9 },
  { month: 'May', reviews: 50, rating: 4.8 },
  { month: 'Jun', reviews: 48, rating: 4.7 }
];

// Recent Reviews
export const recentReviews = [
  {
    id: 1,
    platform: 'Google',
    rating: 5,
    text: 'Exceptional service! The team was professional, punctual, and did an amazing job with our roof repair. Highly recommend their services to anyone in need of roofing work.',
    author: 'John Anderson',
    date: '2024-02-15'
  },
  {
    id: 2,
    platform: 'Facebook',
    rating: 4.5,
    text: 'Very satisfied with the quality of work. The crew was efficient and cleaned up thoroughly after completing the job. Would use their services again.',
    author: 'Sarah Miller',
    date: '2024-02-14'
  },
  {
    id: 3,
    platform: 'Yelp',
    rating: 5,
    text: 'Great experience from start to finish. Fair pricing and excellent communication throughout the entire process. The new roof looks fantastic!',
    author: 'Michael Wilson',
    date: '2024-02-13'
  },
  {
    id: 4,
    platform: 'Google',
    rating: 4,
    text: 'Good work overall. The team was knowledgeable and professional. Only minor issue was some delayed communication, but the end result was great.',
    author: 'Emily Thompson',
    date: '2024-02-12'
  },
  {
    id: 5,
    platform: 'Facebook',
    rating: 5,
    text: 'Outstanding customer service! They went above and beyond to ensure we were satisfied with our new roof installation. Definitely recommend!',
    author: 'David Martinez',
    date: '2024-02-11'
  },
  {
    id: 6,
    platform: 'Yelp',
    rating: 4.5,
    text: 'Very professional team. They completed the job ahead of schedule and within budget. The quality of work is excellent.',
    author: 'Lisa Johnson',
    date: '2024-02-10'
  }
];