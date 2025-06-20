import React from 'react';
import DateRangeSelector from '../components/ui/DateRangeSelector';
import StatCard from '../components/ui/StatCard';
import Chart from '../components/ui/Chart';
import { DataTable } from '../components/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import { DollarSign, TrendingUp, Users, Target } from 'lucide-react';

// Mock data for paid ads
const paidAdsMetrics = {
  totalSpend: {
    value: 12500,
    change: -5.2,
    previousValue: 13185,
  },
  impressions: {
    value: 125000,
    change: 12.5,
    previousValue: 111111,
  },
  clicks: {
    value: 3750,
    change: 8.2,
    previousValue: 3466,
  },
  conversions: {
    value: 85,
    change: 15.0,
    previousValue: 74,
  },
};

const campaigns = [
  {
    id: 1,
    name: 'Roof Repair Spring',
    platform: 'Google Ads',
    status: 'Active',
    budget: 5000,
    spent: 3890,
    impressions: 45000,
    clicks: 1200,
    ctr: 2.67,
    conversions: 25,
    costPerConversion: 155.60,
  },
  {
    id: 2,
    name: 'Emergency Services',
    platform: 'Google Ads',
    status: 'Active',
    budget: 3000,
    spent: 2100,
    impressions: 28000,
    clicks: 850,
    ctr: 3.04,
    conversions: 18,
    costPerConversion: 116.67,
  },
  {
    id: 3,
    name: 'Summer Promotion',
    platform: 'Facebook Ads',
    status: 'Active',
    budget: 2500,
    spent: 1800,
    impressions: 52000,
    clicks: 1700,
    ctr: 3.27,
    conversions: 42,
    costPerConversion: 42.86,
  },
];

const campaignColumns: ColumnDef<typeof campaigns[0]>[] = [
  {
    accessorKey: 'name',
    header: 'Campaign',
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.name}</div>
        <div className="text-sm text-text-secondary">{row.original.platform}</div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={`badge ${
        row.original.status === 'Active' ? 'badge-success' :
        row.original.status === 'Paused' ? 'badge-warning' :
        'badge-danger'
      }`}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ row }) => (
      <div>
        <div>${row.original.budget.toLocaleString()}</div>
        <div className="text-sm text-text-secondary">
          ${row.original.spent.toLocaleString()} spent
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'impressions',
    header: 'Impressions',
    cell: ({ row }) => row.original.impressions.toLocaleString(),
  },
  {
    accessorKey: 'clicks',
    header: 'Clicks',
    cell: ({ row }) => row.original.clicks.toLocaleString(),
  },
  {
    accessorKey: 'ctr',
    header: 'CTR',
    cell: ({ row }) => `${row.original.ctr}%`,
  },
  {
    accessorKey: 'conversions',
    header: 'Conversions',
    cell: ({ row }) => row.original.conversions,
  },
  {
    accessorKey: 'costPerConversion',
    header: 'Cost/Conv.',
    cell: ({ row }) => `$${row.original.costPerConversion.toFixed(2)}`,
  },
];

const conversionTrendData = [
  { month: 'Jan', google: 45, facebook: 32 },
  { month: 'Feb', google: 52, facebook: 28 },
  { month: 'Mar', google: 48, facebook: 35 },
  { month: 'Apr', google: 55, facebook: 42 },
  { month: 'May', google: 62, facebook: 38 },
  { month: 'Jun', google: 58, facebook: 45 },
];

const PaidAds: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Paid Advertising</h2>
      
      <DateRangeSelector showExtendedOptions />
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Ad Spend" 
          value={`$${paidAdsMetrics.totalSpend.value.toLocaleString()}`}
          subtitle="this month"
          change={paidAdsMetrics.totalSpend.change}
          icon={<DollarSign size={20} />}
        />
        <StatCard 
          title="Impressions" 
          value={paidAdsMetrics.impressions.value.toLocaleString()}
          subtitle="total views"
          change={paidAdsMetrics.impressions.change}
          icon={<TrendingUp size={20} />}
        />
        <StatCard 
          title="Clicks" 
          value={paidAdsMetrics.clicks.value.toLocaleString()}
          subtitle="total clicks"
          change={paidAdsMetrics.clicks.change}
          icon={<Users size={20} />}
        />
        <StatCard 
          title="Conversions" 
          value={paidAdsMetrics.conversions.value}
          subtitle="total leads"
          change={paidAdsMetrics.conversions.change}
          icon={<Target size={20} />}
        />
      </div>

      {/* Conversion Trends */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-4">Conversion Trends</h3>
        <Chart
          type="line"
          data={conversionTrendData}
          xKey="month"
          yKeys={['google', 'facebook']}
          height={300}
        />
      </div>
      
      {/* Campaign Performance */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Campaign Performance</h3>
          <div className="flex gap-2">
            <button className="btn btn-outline text-sm">Export Data</button>
            <button className="btn btn-primary text-sm">Create Campaign</button>
          </div>
        </div>
        <DataTable
          columns={campaignColumns}
          data={campaigns}
        />
      </div>
    </div>
  );
}

export default PaidAds;