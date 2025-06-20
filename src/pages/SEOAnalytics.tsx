import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import DateRangeSelector from '../components/ui/DateRangeSelector';
import StatCard from '../components/ui/StatCard';
import { DataTable } from '../components/ui/Table';
import { seoPerformanceMetrics } from '../utils/mockData';

interface Competitor {
  name: string;
  domain: string;
  organicTraffic: number;
  trafficChange: number;
  keywordsRanked: number;
  avgPosition: number;
}

const competitors: Competitor[] = [
  {
    name: 'Elite Roofing Co',
    domain: 'eliteroofing.com',
    organicTraffic: 15200,
    trafficChange: 12.5,
    keywordsRanked: 856,
    avgPosition: 8.4,
  },
  {
    name: 'Summit Roofing Solutions',
    domain: 'summitroofing.com',
    organicTraffic: 12800,
    trafficChange: -5.2,
    keywordsRanked: 723,
    avgPosition: 12.1,
  },
  {
    name: 'Peak Performance Roofing',
    domain: 'peakroofing.com',
    organicTraffic: 18500,
    trafficChange: 8.7,
    keywordsRanked: 945,
    avgPosition: 6.8,
  },
  {
    name: 'Skyline Contractors',
    domain: 'skylinecontractors.com',
    organicTraffic: 9800,
    trafficChange: 15.3,
    keywordsRanked: 512,
    avgPosition: 15.3,
  },
  {
    name: 'Precision Roofing Services',
    domain: 'precisionroofing.com',
    organicTraffic: 14200,
    trafficChange: -2.8,
    keywordsRanked: 678,
    avgPosition: 10.2,
  },
];

const columns: ColumnDef<Competitor>[] = [
  {
    accessorKey: 'name',
    header: 'Competitor',
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.name}</div>
        <div className="text-sm text-text-secondary">{row.original.domain}</div>
      </div>
    ),
  },
  {
    accessorKey: 'organicTraffic',
    header: 'Organic Traffic',
    cell: ({ row }) => (
      <div>
        {row.original.organicTraffic.toLocaleString()}
        <div className={`text-sm ${row.original.trafficChange >= 0 ? 'text-success' : 'text-danger'}`}>
          {row.original.trafficChange > 0 ? '+' : ''}{row.original.trafficChange}%
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'keywordsRanked',
    header: 'Keywords Ranked',
  },
  {
    accessorKey: 'avgPosition',
    header: 'Avg. Position',
  },
];

const SEOAnalytics: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">SEO Analytics</h2>
      
      <DateRangeSelector showExtendedOptions />
      
      {/* SEO Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="New Keywords" 
          value={seoPerformanceMetrics.newKeywords.value}
          subtitle="indexed this month"
          change={seoPerformanceMetrics.newKeywords.change}
        />
        <StatCard 
          title="Avg. Position Change" 
          value={seoPerformanceMetrics.avgPositionChange.value}
          subtitle="positions moved up"
          change={seoPerformanceMetrics.avgPositionChange.change}
        />
        <StatCard 
          title="Pages Indexed" 
          value={seoPerformanceMetrics.pagesIndexed.value}
          subtitle="total pages"
          change={seoPerformanceMetrics.pagesIndexed.change}
        />
        <StatCard 
          title="Organic Clicks" 
          value={seoPerformanceMetrics.organicClicks.value}
          subtitle="this month"
          change={seoPerformanceMetrics.organicClicks.change}
        />
      </div>

      {/* Competitor Analysis */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Competitor Analysis</h3>
          <button className="btn btn-outline text-sm">Export Data</button>
        </div>
        <DataTable columns={columns} data={competitors} />
      </div>

      {/* New Page Tracker */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">New Page Tracker</h3>
          <button className="btn btn-outline text-sm">View All Pages</button>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>URL</th>
                <th>Status</th>
                <th>Days to Index</th>
                <th>Keywords Indexed</th>
                <th>New Impressions</th>
                <th>Avg. Position</th>
              </tr>
            </thead>
            <tbody>
              {seoPerformanceMetrics.newPages?.map((page) => (
                <tr key={page.url}>
                  <td className="font-medium">{page.url}</td>
                  <td>
                    <span className={`badge ${
                      page.status === 'Indexed' ? 'badge-success' :
                      page.status === 'Indexing' ? 'badge-warning' :
                      'badge-info'
                    }`}>
                      {page.status}
                    </span>
                  </td>
                  <td>{page.daysToIndex || '-'}</td>
                  <td>{page.keywordsIndexed}</td>
                  <td>{page.newImpressions.toLocaleString()}</td>
                  <td>{page.avgPosition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalytics;