import React from 'react';
import { useState } from 'react';
import { DataTable } from '../components/ui/Table';
import Chart from '../components/ui/Chart';
import StatCard from '../components/ui/StatCard';
import { Phone, FileText } from 'lucide-react';

interface Lead {
  id: string;
  date: string;
  name: string;
  email: string;
  source: string;
  marketingTouchpoint: string | null;
  phone: string;
  landingPage: string;
  serviceRequested: string;
  status: string;
  callRecording: boolean;
}

const LeadIntelligence: React.FC = () => {
  // Colors matching your theme
  const COLORS = ['#5D3FD3', '#F5B041', '#2ECC71', '#60A5FA'];

  // Mock data functions (to be replaced with API calls)
  const getLeadSourcesData = () => [
    { name: "Organic Search", value: 40 },
    { name: "Paid Ads", value: 25 },
    { name: "Referral", value: 15 },
    { name: "Direct", value: 10 },
    { name: "Social Media", value: 10 },
  ];

  const getLeadStatusData = () => [
    { name: "New", value: 38 },
    { name: "Contacted", value: 27 },
    { name: "Qualified", value: 18 },
    { name: "Converted", value: 12 },
    { name: "Lost", value: 5 },
  ];

  const getLeadPerServiceData = () => [
    { name: "Roof Repair", value: 42 },
    { name: "New Installation", value: 28 },
    { name: "Storm Damage", value: 18 },
    { name: "Inspection", value: 8 },
    { name: "Other", value: 4 },
  ];

  const getLeadsData = (): Lead[] => [
    {
      id: "1",
      date: "2024-07-28",
      name: "John Smith",
      email: "john.smith@example.com",
      source: "Organic Search",
      marketingTouchpoint: "Blog Post: 5 Tips",
      phone: "555-123-4567",
      landingPage: "/blog/5-tips",
      serviceRequested: "Roof Repair",
      status: "New",
      callRecording: true,
    },
    {
      id: "2",
      date: "2024-07-27",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      source: "Paid Ads",
      marketingTouchpoint: "Google Ads Campaign 1",
      phone: "555-987-6543",
      landingPage: "/promo/summer2024",
      serviceRequested: "New Installation",
      status: "Contacted",
      callRecording: false,
    },
    {
      id: "3",
      date: "2024-07-28",
      name: "Robert Jones",
      email: "robert.jones@example.com",
      source: "Referral",
      marketingTouchpoint: "Referral from John Smith",
      phone: "555-111-2222",
      landingPage: "/referral",
      serviceRequested: "Storm Damage",
      status: "Qualified",
      callRecording: true,
    },
    {
      id: "4",
      date: "2024-07-26",
      name: "Mary Brown",
      email: "mary.brown@example.com",
      source: "Direct",
      marketingTouchpoint: null,
      phone: "555-333-4444",
      landingPage: "/",
      serviceRequested: "Inspection",
      status: "Converted",
      callRecording: true,
    },
    {
      id: "5",
      date: "2024-07-25",
      name: "Michael Davis",
      email: "michael.davis@example.com",
      source: "Social Media",
      marketingTouchpoint: "Facebook Ad Campaign",
      phone: "555-555-6666",
      landingPage: "/social/facebook",
      serviceRequested: "Other",
      status: "Lost",
      callRecording: false,
    },
  ];

  // State management
  const [activeTab, setActiveTab] = useState('all');
  const [leadsData] = useState(getLeadsData());
  const [leadSources] = useState(getLeadSourcesData());
  const [leadStatus] = useState(getLeadStatusData());
  const [leadServices] = useState(getLeadPerServiceData());

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Lead Intelligence</h2>

      {/* Charts Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-medium mb-2">Lead Source Breakdown</h3>
          <p className="text-sm text-text-secondary mb-4">Distribution of leads by marketing channel</p>
          <Chart
            type="pie"
            data={leadSources}
            xKey="name"
            yKeys={['value']}
            colors={COLORS}
            height={240}
          />
        </div>

        <div className="card">
          <h3 className="text-lg font-medium mb-2">Lead Status</h3>
          <p className="text-sm text-text-secondary mb-4">Current status of all leads</p>
          <Chart
            type="bar"
            data={leadStatus}
            xKey="name"
            yKeys={['value']}
            colors={COLORS}
            height={240}
          />
        </div>

        <div className="card">
          <h3 className="text-lg font-medium mb-2">Service Requested</h3>
          <p className="text-sm text-text-secondary mb-4">Types of services requested by leads</p>
          <Chart
            type="bar"
            data={leadServices}
            xKey="name"
            yKeys={['value']}
            colors={[COLORS[0]]}
            height={240}
          />
        </div>
      </div>

      {/* Detailed Lead Log */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium">Detailed Lead Log</h3>
            <p className="text-sm text-text-secondary">Comprehensive record of all leads, including source and status</p>
          </div>
          <button className="btn btn-outline">Export CSV</button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('all')}
          >
            All Leads
          </button>
          <button
            className={`btn ${activeTab === 'new' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('new')}
          >
            New
          </button>
          <button
            className={`btn ${activeTab === 'contacted' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('contacted')}
          >
            Contacted
          </button>
          <button
            className={`btn ${activeTab === 'qualified' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('qualified')}
          >
            Qualified
          </button>
          <button
            className={`btn ${activeTab === 'converted' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('converted')}
          >
            Converted
          </button>
        </div>

        <DataTable
          data={activeTab === 'all' ? leadsData : leadsData.filter(lead => lead.status.toLowerCase() === activeTab)}
          columns={[
            {
              accessorKey: 'date',
              header: 'Date',
            },
            {
              accessorKey: 'name',
              header: 'Name',
              cell: ({ row }) => (
                <div>
                  <div className="font-medium">{row.original.name}</div>
                  <div className="text-xs text-text-secondary mt-1">{row.original.email}</div>
                </div>
              ),
            },
            {
              accessorKey: 'source',
              header: 'Source',
              cell: ({ row }) => (
                <div>
                  <div>{row.original.source}</div>
                  {row.original.marketingTouchpoint && (
                    <div className="text-xs text-text-secondary mt-1">{row.original.marketingTouchpoint}</div>
                  )}
                </div>
              ),
            },
            {
              accessorKey: 'phone',
              header: 'Phone',
            },
            {
              accessorKey: 'landingPage',
              header: 'Landing Page',
            },
            {
              accessorKey: 'serviceRequested',
              header: 'Service',
            },
            {
              accessorKey: 'status',
              header: 'Status',
              cell: ({ row }) => (
                <span className={`badge ${
                  row.original.status === 'New' ? 'badge-info' :
                  row.original.status === 'Contacted' ? 'badge-warning' :
                  row.original.status === 'Qualified' ? 'badge-success' :
                  row.original.status === 'Converted' ? 'badge-success' :
                  'badge-danger'
                }`}>
                  {row.original.status}
                </span>
              ),
            },
            {
              accessorKey: 'actions',
              header: '',
              cell: ({ row }) => (
                <div className="flex gap-1">
                  {row.original.callRecording && (
                    <button className="btn btn-ghost btn-sm p-1">
                      <Phone size={16} />
                    </button>
                  )}
                  <button className="btn btn-ghost btn-sm p-1">
                    <FileText size={16} />
                  </button>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* Lead Quality Metrics */}
      <div className="card">
        <h3 className="text-lg font-medium mb-2">Lead Quality Metrics</h3>
        <p className="text-sm text-text-secondary mb-4">Analysis of lead quality and conversion rates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Average Lead Quality"
            value="7.8/10"
            subtitle="+0.5 vs last month"
            change={5}
          />
          <StatCard
            title="Lead to Sale Conversion"
            value="23.4%"
            subtitle="+1.2% vs last month"
            change={1.2}
          />
          <StatCard
            title="Average Sale Value"
            value="$12,450"
            subtitle="+$320 vs last month"
            change={2.6}
          />
          <StatCard
            title="Response Time"
            value="1.4 hrs"
            subtitle="-0.2 hrs vs last month"
            change={12.5}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadIntelligence;