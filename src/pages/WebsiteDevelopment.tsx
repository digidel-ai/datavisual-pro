import React from 'react';
import { timelineItems, sitemapStructure } from '../utils/mockData';
import TimelineItem from '../components/ui/TimelineItem';
import { Image, FileText, Box, CheckCircle, AlertCircle, Clock, Send } from 'lucide-react';

// Mock data for website milestones
const websiteMilestones = [
  {
    id: 1,
    title: 'Sitemap Meeting',
    description: 'Initial meeting to discuss site structure and content organization',
    status: 'Completed',
    date: '2025-04-15'
  },
  {
    id: 2,
    title: 'Asset Gathering',
    description: 'Deadline for client to provide all necessary content, images, and brand assets',
    status: 'Completed',
    date: '2025-05-10'
  },
  {
    id: 3,
    title: 'Design Brainstorming',
    description: 'Internal team meeting to develop design concepts based on client requirements',
    status: 'In Progress',
    date: '2025-05-20'
  },
  {
    id: 4,
    title: 'Design Prototype Presentation',
    description: 'Present initial design concepts to client for feedback and approval',
    status: 'Pending',
    date: '2025-06-01'
  },
  {
    id: 5,
    title: 'Pre-Launch Website Presentation',
    description: 'Final review of the website before launch, addressing any last-minute changes',
    status: 'Pending',
    date: '2025-06-15'
  }
];

const WebsiteDevelopment: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Website Development Timeline */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-2">Website Development Timeline</h3>
        <p className="text-sm text-text-secondary mb-6">Overview of project milestones and status</p>
        
        <div className="relative">
          <div className="absolute left-2 inset-y-0 w-0.5 bg-gray-700"></div>
          
          {websiteMilestones.map((milestone) => (
            <div key={milestone.id} className="relative pl-8 pb-8 last:pb-0">
              <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                milestone.status === "Completed" ? "bg-success border-success" :
                milestone.status === "In Progress" ? "bg-warning border-warning" :
                "bg-background-dark border-gray-600"
              }`}></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{milestone.title}</h4>
                    <span className={`badge ${
                      milestone.status === "Completed" ? "badge-success" :
                      milestone.status === "In Progress" ? "badge-warning" :
                      "badge-info"
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">{milestone.description}</p>
                </div>
                <div className="text-sm text-text-secondary">
                  {milestone.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Website Performance Metrics */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-6">Website Performance Metrics</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="card bg-background-dark">
            <div className="p-4 text-center">
              <div className="text-sm text-text-secondary">Maintenance Days</div>
              <div className="text-3xl font-medium mt-2">14</div>
              <div className="text-xs text-success mt-1">On Track</div>
            </div>
          </div>

          <div className="card bg-background-dark">
            <div className="p-4 text-center">
              <div className="text-sm text-text-secondary">Page Speed</div>
              <div className="flex justify-center items-center gap-1 mt-2">
                <span className="text-3xl font-medium">86</span>
                <span className="text-sm text-text-secondary">/100</span>
              </div>
              <div className="text-xs text-success mt-1">Good</div>
            </div>
          </div>

          <div className="card bg-background-dark">
            <div className="p-4 text-center">
              <div className="text-sm text-text-secondary">Plugin Updates</div>
              <div className="text-3xl font-medium mt-2">100%</div>
              <div className="text-xs text-success mt-1">All Updated</div>
            </div>
          </div>

          <div className="card bg-background-dark">
            <div className="p-4 text-center">
              <div className="text-sm text-text-secondary">Security Status</div>
              <div className="text-3xl font-medium mt-2">Secure</div>
              <div className="text-xs text-success mt-1">No Issues</div>
            </div>
          </div>

          <div className="card bg-background-dark">
            <div className="p-4 text-center">
              <div className="text-sm text-text-secondary">Backup Status</div>
              <div className="text-3xl font-medium mt-2">Daily</div>
              <div className="text-xs text-success mt-1">Up to Date</div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Upload */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-4">Asset Upload</h3>
        <p className="text-text-secondary mb-6">Upload your brand assets, team photos, and other materials needed for your website.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <button className="bg-background-dark hover:bg-gray-800 p-8 rounded-lg flex flex-col items-center justify-center gap-4 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Image size={32} className="text-primary" />
            </div>
            <span className="text-lg font-medium">Team Photos</span>
          </button>
          
          <button className="bg-background-dark hover:bg-gray-800 p-8 rounded-lg flex flex-col items-center justify-center gap-4 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FileText size={32} className="text-primary" />
            </div>
            <span className="text-lg font-medium">Credentials</span>
          </button>
          
          <button className="bg-background-dark hover:bg-gray-800 p-8 rounded-lg flex flex-col items-center justify-center gap-4 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Box size={32} className="text-primary" />
            </div>
            <span className="text-lg font-medium">Manufacturer Logos</span>
          </button>
        </div>
      </div>

      {/* Site Structure */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-4">Site Structure</h3>
        <p className="text-text-secondary mb-6">Current website structure based on approved sitemap.</p>
        
        <div className="space-y-3">
          {Object.entries(sitemapStructure).map(([key, page]: [string, any]) => (
            <div key={key} className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-background-dark rounded-lg">
                <input
                  type="checkbox"
                  id={`page-${key}`}
                  checked={page.selected}
                  className="w-5 h-5 rounded border-gray-700 text-primary focus:ring-primary"
                  readOnly
                />
                <label 
                  htmlFor={`page-${key}`}
                  className="text-lg font-medium flex-1"
                >
                  {page.title}
                </label>
              </div>
              
              {page.children && (
                <div className="ml-8 space-y-3">
                  {Object.entries(page.children).map(([childKey, child]: [string, any]) => (
                    <div key={childKey} className="flex items-center gap-3 p-3 bg-background-dark rounded-lg">
                      <input
                        type="checkbox"
                        id={`page-${key}-${childKey}`}
                        checked={child.selected}
                        className="w-5 h-5 rounded border-gray-700 text-primary focus:ring-primary"
                        readOnly
                      />
                      <label 
                        htmlFor={`page-${key}-${childKey}`}
                        className="text-lg font-medium flex-1"
                      >
                        {child.title}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button className="btn btn-primary">Generate Sitemap</button>
          <p className="text-xs text-text-secondary mt-2">
            Please select the pages/services you would like on your website. Click 'Generate Sitemap' to see a potential structure 
            (for informational purposes only, details will be discussed in the Sitemap Meeting).
          </p>
        </div>
      </div>
      
      {/* Development Notes */}
      <div className="card">
        <h3 className="text-lg font-medium mb-4">Development Notes</h3>
        <p className="text-text-secondary mb-6">Team communication and project updates.</p>
        
        <div className="space-y-6 mb-6 max-h-[400px] overflow-y-auto p-4 bg-background-dark rounded-lg">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-medium text-lg">S</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-lg">Sarah J.</span>
                <span className="text-sm text-text-secondary">10:32 AM</span>
              </div>
              <p className="text-text-secondary">
                I've uploaded the new logo files to the assets folder. Please use the vector version for the website header.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-black font-medium text-lg">M</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-lg">Mike T.</span>
                <span className="text-sm text-text-secondary">11:15 AM</span>
              </div>
              <p className="text-text-secondary">
                Got it. I'll implement the new logo today. Also, I noticed we need more content for the commercial roofing page. Can you provide that by tomorrow?
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-medium text-lg">C</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-lg">Client</span>
                <span className="text-sm text-text-secondary">2:45 PM</span>
              </div>
              <p className="text-text-secondary">
                I'll send over the commercial roofing content by end of day. Also, can we add a financing options page under Services?
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-background-dark border border-gray-700 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="btn btn-primary px-6">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;