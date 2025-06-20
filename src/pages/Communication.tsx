import React, { useState } from 'react';
import { Send, Calendar, FileText, Image, Phone } from 'lucide-react';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  avatar: string;
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    content: 'Hi! Just wanted to let you know that I\'ve reviewed your latest campaign performance and have some suggestions for optimization.',
    timestamp: '10:30 AM',
    avatar: 'SJ',
  },
  {
    id: 2,
    sender: 'Mountain View Roofing',
    content: 'Thanks Sarah! When would be a good time to discuss these suggestions?',
    timestamp: '11:15 AM',
    avatar: 'MV',
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    content: 'I can schedule a call tomorrow at 2 PM if that works for you? We can go through the data together.',
    timestamp: '11:20 AM',
    avatar: 'SJ',
  },
];

const mockInsights = [
  {
    date: '2025-05-15',
    title: 'Campaign Performance Update',
    content: 'Your Google Ads campaign "Emergency Roof Repair" has shown a 25% increase in conversion rate over the past week.',
  },
  {
    date: '2025-05-14',
    title: 'Website Analytics Insight',
    content: 'We\'ve noticed increased traffic to your service pages. Recommending content updates to capitalize on this trend.',
  },
  {
    date: '2025-05-13',
    title: 'Local SEO Achievement',
    content: 'Your business has moved up to position #2 in local map pack results for "roof repair near me".',
  },
];

const Communication: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Communication Hub</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Area */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Team Chat</h3>
              <button className="btn btn-outline text-sm">
                <Calendar size={16} className="mr-2" />
                Schedule Call
              </button>
            </div>

            {/* Messages */}
            <div className="space-y-4 h-[400px] overflow-y-auto mb-4">
              {mockMessages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">{message.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{message.sender}</span>
                      <span className="text-xs text-text-secondary">{message.timestamp}</span>
                    </div>
                    <p className="text-sm mt-1">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-background-dark border border-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="btn btn-primary py-2 px-3"
                onClick={handleSendMessage}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="btn btn-outline text-sm flex items-center justify-center gap-2">
                <Phone size={16} />
                Call Team
              </button>
              <button className="btn btn-outline text-sm flex items-center justify-center gap-2">
                <Calendar size={16} />
                Book Meeting
              </button>
              <button className="btn btn-outline text-sm flex items-center justify-center gap-2">
                <FileText size={16} />
                Submit Request
              </button>
              <button className="btn btn-outline text-sm flex items-center justify-center gap-2">
                <Image size={16} />
                Share Files
              </button>
            </div>
          </div>

          {/* Team Insights */}
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Team Insights</h3>
            <div className="space-y-4">
              {mockInsights.map((insight, index) => (
                <div key={index} className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{insight.title}</h4>
                    <span className="text-xs text-text-secondary">
                      {new Date(insight.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{insight.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Files */}
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Recent Files</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-background-dark rounded-md">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  <span className="text-sm">May Campaign Report.pdf</span>
                </div>
                <button className="text-xs text-primary hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between p-2 bg-background-dark rounded-md">
                <div className="flex items-center gap-2">
                  <Image size={16} className="text-secondary" />
                  <span className="text-sm">Project Photos.zip</span>
                </div>
                <button className="text-xs text-primary hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between p-2 bg-background-dark rounded-md">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  <span className="text-sm">Content Calendar.xlsx</span>
                </div>
                <button className="text-xs text-primary hover:underline">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;