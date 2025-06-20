import React, { useState } from 'react';
import { 
  CheckCircle, 
  Gauge, 
  Clock, 
  AlertCircle,
  FileCode,
  ArrowUpCircle
} from 'lucide-react';

// Mock data for maintenance logs
const mockMaintenanceLogs = [
  {
    id: 1,
    date: '2025-05-14',
    task: 'Plugin Updates',
    description: 'Updated all WordPress plugins to latest versions',
    performedBy: 'System Admin'
  },
  {
    id: 2,
    date: '2025-05-07',
    task: 'Security Scan',
    description: 'Completed full security scan and malware check',
    performedBy: 'Security Team'
  },
  {
    id: 3,
    date: '2025-04-28',
    task: 'Database Optimization',
    description: 'Optimized database tables and removed post revisions',
    performedBy: 'Database Admin'
  },
  {
    id: 4,
    date: '2025-04-20',
    task: 'Backup Creation',
    description: 'Created full backup of website files and database',
    performedBy: 'System Admin'
  }
];

// Mock data for issues
const mockIssuesData = [
  {
    id: 1,
    title: 'Mobile Menu Glitching',
    description: 'Mobile menu occasionally fails to close when clicking outside the menu area. Our developers are currently working on a fix.',
    status: 'In Progress',
    reportedDate: 'May 12, 2025',
    etaDate: 'May 18, 2025'
  },
  {
    id: 2,
    title: 'Contact Form Error',
    description: 'Contact form was showing validation errors even when fields were correctly filled. This issue has been resolved by updating the form validation logic.',
    status: 'Resolved',
    reportedDate: 'May 5, 2025',
    resolvedDate: 'May 7, 2025'
  }
];

const WebsiteMaintenance: React.FC = () => {
  // State for statistics
  const [uptimePercent] = useState('99.9%');
  const [pageSpeedScore] = useState('86/100');
  const [lastBackupTime] = useState('12:00 AM');
  const [securityStatus] = useState('Protected');

  // State for maintenance logs
  const [maintenanceLogs] = useState(mockMaintenanceLogs);
  
  // State for issues
  const [issues] = useState(mockIssuesData);
  
  // State for website tools
  const [activeTab, setActiveTab] = useState('scripts');
  const [scriptName, setScriptName] = useState('');
  const [scriptCode, setScriptCode] = useState('');
  const [scriptLocation, setScriptLocation] = useState('header');

  // State for feature requests
  const [featureTitle, setFeatureTitle] = useState('');
  const [featureDescription, setFeatureDescription] = useState('');
  const [featurePriority, setFeaturePriority] = useState('low');

  const handleFeatureRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feature request submitted:', { featureTitle, featureDescription, featurePriority });
    // TODO: API Integration for feature request submission
  };

  const handleScriptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Script submitted:', { scriptName, scriptCode, scriptLocation });
    // TODO: API Integration for script submission
  };

  const handleRunSpeedTest = () => {
    console.log('Running speed test...');
    // TODO: API Integration for speed test
  };

  const handleReportNewIssue = () => {
    console.log('Opening new issue report form...');
    // TODO: API Integration or Modal for new issue
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-2">Website Health Overview</h2>
      <p className="text-sm text-text-secondary mb-6">
        Current status of your website performance and maintenance
      </p>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-medium text-text-secondary">Uptime</h4>
            <CheckCircle size={16} className="text-success" />
          </div>
          <div className="text-2xl font-semibold">{uptimePercent}</div>
          <div className="text-xs text-text-secondary mt-1">Last 30 days</div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-medium text-text-secondary">Page Speed</h4>
            <Gauge size={16} className="text-success" />
          </div>
          <div className="text-2xl font-semibold">{pageSpeedScore}</div>
          <div className="text-xs text-text-secondary mt-1">Desktop score</div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-medium text-text-secondary">Last Backup</h4>
            <Clock size={16} className="text-success" />
          </div>
          <div className="text-2xl font-semibold">Today</div>
          <div className="text-xs text-text-secondary mt-1">{lastBackupTime}</div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-medium text-text-secondary">Security</h4>
            <CheckCircle size={16} className="text-success" />
          </div>
          <div className="text-2xl font-semibold">{securityStatus}</div>
          <div className="text-xs text-text-secondary mt-1">SSL & firewall active</div>
        </div>
      </div>

      {/* Maintenance Log */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-2">Maintenance Log</h3>
        <p className="text-sm text-text-secondary mb-4">
          Recent website maintenance activities and updates
        </p>
        
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Task</th>
                <th>Description</th>
                <th>Performed By</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.date}</td>
                  <td>{log.task}</td>
                  <td>{log.description}</td>
                  <td>{log.performedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Issues & Bugs */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-2">Issues & Bugs</h3>
        <p className="text-sm text-text-secondary mb-4">Track and report website issues</p>
        
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} className="text-warning" />
                  <span className="font-medium">{issue.title}</span>
                </div>
                <span className={`badge ${issue.status === 'Resolved' ? 'badge-success' : 'badge-warning'}`}>
                  {issue.status}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-3">{issue.description}</p>
              <div className="flex justify-between text-xs text-text-secondary">
                <span>Reported: {issue.reportedDate}</span>
                <span>{issue.status === 'In Progress' ? `ETA: ${issue.etaDate}` : `Resolved: ${issue.resolvedDate}`}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="btn btn-primary w-full mt-6"
          onClick={handleReportNewIssue}
        >
          Report New Issue
        </button>
      </div>

      {/* Feature Requests and Website Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Requests */}
        <div className="card">
          <h3 className="text-lg font-medium mb-2">Feature Requests</h3>
          <p className="text-sm text-text-secondary mb-4">Request new features for your website</p>
          
          <form onSubmit={handleFeatureRequestSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Feature Title</label>
              <input
                type="text"
                value={featureTitle}
                onChange={(e) => setFeatureTitle(e.target.value)}
                className="w-full bg-background-dark border border-gray-700 rounded-md p-2"
                placeholder="Brief description of the feature"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Detailed Description</label>
              <textarea
                value={featureDescription}
                onChange={(e) => setFeatureDescription(e.target.value)}
                className="w-full bg-background-dark border border-gray-700 rounded-md p-2 h-24"
                placeholder="Please describe what you'd like to add to your website..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                value={featurePriority}
                onChange={(e) => setFeaturePriority(e.target.value)}
                className="w-full bg-background-dark border border-gray-700 rounded-md p-2"
              >
                <option value="low">Low - Nice to have</option>
                <option value="medium">Medium - Important</option>
                <option value="high">High - Critical</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Submit Request
            </button>
          </form>
        </div>

        {/* Website Tools */}
        <div className="card">
          <h3 className="text-lg font-medium mb-2">Website Tools</h3>
          <p className="text-sm text-text-secondary mb-4">Useful tools for your website</p>
          
          <div className="flex gap-2 mb-4">
            <button
              className={`btn ${activeTab === 'scripts' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('scripts')}
            >
              Add Scripts
            </button>
            <button
              className={`btn ${activeTab === 'speed' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveTab('speed')}
            >
              Page Speed
            </button>
          </div>
          
          {activeTab === 'scripts' ? (
            <form onSubmit={handleScriptSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Script Name</label>
                <input
                  type="text"
                  value={scriptName}
                  onChange={(e) => setScriptName(e.target.value)}
                  className="w-full bg-background-dark border border-gray-700 rounded-md p-2"
                  placeholder="e.g. Google Analytics, Facebook Pixel"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Script Code</label>
                <textarea
                  value={scriptCode}
                  onChange={(e) => setScriptCode(e.target.value)}
                  className="w-full bg-background-dark border border-gray-700 rounded-md p-2 h-24"
                  placeholder="Paste your script code here..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Script Location</label>
                <select
                  value={scriptLocation}
                  onChange={(e) => setScriptLocation(e.target.value)}
                  className="w-full bg-background-dark border border-gray-700 rounded-md p-2"
                >
                  <option value="header">Header (before &lt;/head&gt;)</option>
                  <option value="body">Body (before &lt;/body&gt;)</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-outline w-full">
                <FileCode size={16} className="mr-2" />
                Submit Script for Review
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <button
                className="btn btn-primary"
                onClick={handleRunSpeedTest}
              >
                <ArrowUpCircle size={16} className="mr-2" />
                Run Speed Test
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteMaintenance;