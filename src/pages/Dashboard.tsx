import React from 'react';
import DateRangeSelector from '../components/ui/DateRangeSelector';
import StatCard from '../components/ui/StatCard';
import Chart from '../components/ui/Chart';
import { DataTable } from '../components/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp,
  Users,
  DollarSign,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';
import { activeCampaigns, recentLeads } from '../utils/mockData';
import { useDateRange } from '../context/DateRangeContext';

interface KeywordData {
  keyword: string;
  currentRank: number;
  previousRank: number;
  rankChange: number;
  searchVolume: number;
  difficulty: string;
}

const keywordColumns: ColumnDef<KeywordData>[] = [
  {
    accessorKey: 'keyword',
    header: 'Keyword',
    cell: ({ row }) => (
      <div className="font-medium">{row.original.keyword}</div>
    ),
  },
  {
    accessorKey: 'currentRank',
    header: 'Current Rank',
  },
  {
    accessorKey: 'previousRank',
    header: 'Previous Rank',
  },
  {
    accessorKey: 'rankChange',
    header: 'Change',
    cell: ({ row }) => {
      const change = row.original.rankChange;
      return (
        <div className={`flex items-center gap-1 ${
          change > 0 ? 'text-success' : 
          change < 0 ? 'text-danger' : 
          'text-text-secondary'
        }`}>
          {change > 0 ? <ArrowUpRight size={16} /> :
           change < 0 ? <ArrowDownRight size={16} /> :
           <Minus size={16} />}
          <span>{Math.abs(change)}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'searchVolume',
    header: 'Search Volume',
    cell: ({ row }) => (
      <div>{row.original.searchVolume.toLocaleString()}</div>
    ),
  },
  {
    accessorKey: 'difficulty',
    header: 'Difficulty',
    cell: ({ row }) => (
      <span className={`badge ${
        row.original.difficulty === 'High' ? 'badge-danger' :
        row.original.difficulty === 'Medium' ? 'badge-warning' :
        'badge-success'
      }`}>
        {row.original.difficulty}
      </span>
    ),
  },
];

const Dashboard: React.FC = () => {
  const { mockData } = useDateRange();
  const { dashboardStats, trafficData, leadSourcesData, keywordsData } = mockData;

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      
      <DateRangeSelector />
      
      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Organic Traffic" 
          value={dashboardStats.organicTraffic.value}
          subtitle="visitors"
          change={dashboardStats.organicTraffic.change}
          icon={<TrendingUp size={20} />}
        />
        <StatCard 
          title="Total Leads" 
          value={dashboardStats.totalLeads.value}
          subtitle="new leads"
          change={dashboardStats.totalLeads.change}
          icon={<Users size={20} />}
        />
        <StatCard 
          title="Avg. Cost Per Lead" 
          value={`$${dashboardStats.costPerLead.value}`}
          subtitle="per conversion"
          change={dashboardStats.costPerLead.change}
          icon={<DollarSign size={20} />}
        />
        <StatCard 
          title="Keywords in Top 10" 
          value={dashboardStats.topKeywords.value}
          subtitle="target keywords"
          change={dashboardStats.topKeywords.change}
          icon={<Search size={20} />}
        />
      </div>
      
      {/* Traffic & Lead Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Website Traffic</h3>
          <Chart
            type="line"
            data={trafficData}
            xKey="date"
            yKeys={['organic', 'paid', 'direct']}
            height={300}
          />
        </div>
        
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Lead Sources</h3>
          <Chart
            type="pie"
            data={leadSourcesData}
            xKey="name"
            yKeys={['value']}
            height={300}
          />
        </div>
      </div>
      
      {/* Keywords Performance Table */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Keywords Performance</h3>
          <button className="btn btn-outline text-sm">Export Data</button>
        </div>
        <DataTable
          columns={keywordColumns}
          data={keywordsData}
        />
      </div>
      
      {/* Active Campaigns */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Active Campaigns</h3>
          <button className="btn btn-outline text-sm">View All</button>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Platform</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>Conversions</th>
                <th>Budget Used</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeCampaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="font-medium">{campaign.name}</td>
                  <td>{campaign.platform}</td>
                  <td>{campaign.impressions.toLocaleString()}</td>
                  <td>{campaign.clicks.toLocaleString()}</td>
                  <td>{campaign.conversions}</td>
                  <td>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          campaign.budgetUsed > 85
                            ? 'bg-warning'
                            : 'bg-primary'
                        }`}
                        style={{ width: `${campaign.budgetUsed}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-text-secondary">{campaign.budgetUsed}%</span>
                  </td>
                  <td>
                    <span className="badge badge-success">{campaign.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent Leads */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Leads</h3>
          <button className="btn btn-outline text-sm">View All</button>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Source</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{new Date(lead.date).toLocaleDateString()}</td>
                  <td className="font-medium">{lead.name}</td>
                  <td>{lead.source}</td>
                  <td>{lead.phone}</td>
                  <td>
                    <span 
                      className={`badge ${
                        lead.status === 'New' ? 'badge-info' :
                        lead.status === 'Contacted' ? 'badge-warning' :
                        lead.status === 'Qualified' ? 'badge-success' :
                        lead.status === 'Closed Won' ? 'badge-success' :
                        'badge-info'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-primary text-xs py-1 px-2">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;