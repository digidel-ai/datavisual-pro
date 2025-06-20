import React, { useState } from 'react';
import StatCard from '../components/ui/StatCard';
import { Star, MessageSquare, BarChart3, TrendingUp } from 'lucide-react';
import { reputationMetrics, reviewTrendData, recentReviews } from '../utils/mockData';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const Reputation: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  
  const platforms = ['All Platforms', 'Google', 'Facebook', 'Yelp'];

  const filteredReviews = selectedPlatform === 'All Platforms' 
    ? recentReviews
    : recentReviews.filter(review => review.platform === selectedPlatform);

  // Function to render rating stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex text-secondary">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={16} fill="currentColor" className="opacity-50" />
            <Star size={16} fill="currentColor" className="absolute top-0 left-0 w-1/2 overflow-hidden" />
          </div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} size={16} className="text-gray-600" />
        ))}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Reputation Management</h2>
        
        <div className="relative">
          <select 
            className="bg-background-dark border border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
            value="Last 30 Days"
            onChange={() => {}}
          >
            <option>Last 30 Days</option>
            <option>May 2025</option>
            <option>April 2025</option>
            <option>March 2025</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Reputation KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Average Rating" 
          value={reputationMetrics.averageRating.value}
          subtitle="out of 5 stars"
          change={reputationMetrics.averageRating.change}
          icon={<Star size={20} />}
        />
        <StatCard 
          title="Total Reviews" 
          value={reputationMetrics.totalReviews.value}
          subtitle="across all platforms"
          change={reputationMetrics.totalReviews.change}
          icon={<MessageSquare size={20} />}
        />
        <StatCard 
          title="Response Rate" 
          value={reputationMetrics.responseRate.value}
          subtitle="within 24 hours"
          change={reputationMetrics.responseRate.change}
          icon={<BarChart3 size={20} />}
        />
        <StatCard 
          title="Sentiment Score" 
          value={reputationMetrics.sentimentScore.value}
          subtitle="positive sentiment"
          change={reputationMetrics.sentimentScore.change}
          icon={<TrendingUp size={20} />}
        />
      </div>
      
      {/* Review Trend Chart */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-4">Review Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={reviewTrendData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#B3B3B3" />
              <YAxis yAxisId="left" stroke="#B3B3B3" />
              <YAxis yAxisId="right" orientation="right" stroke="#B3B3B3" domain={[4, 5]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E1E1E',
                  borderColor: '#333',
                  color: '#FFF',
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="reviews"
                stroke="#F5B041"
                strokeWidth={2}
                name="Reviews"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="rating"
                stroke="#5D3FD3"
                strokeWidth={2}
                name="Avg. Rating"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Recent Reviews */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Reviews</h3>
          
          <div className="relative">
            <select 
              className="bg-background-dark border border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="card">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {review.platform === 'Google' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 186.69 190.5"
                      >
                        <g>
                          <path
                            d="M95.25 77.932v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                            fill="#4285f4"
                          />
                          <path
                            d="M41.869 113.38l-6.972 5.337-24.679 19.223c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                            fill="#34a853"
                          />
                          <path
                            d="M41.869 77.118c-3.295 9.74-5.158 20.075-5.158 30.882s1.862 21.143 5.158 30.882c0 .085 27.645-21.339 27.645-21.339-1.73-5.337-2.696-11.025-2.696-17.08s.966-11.743 2.696-17.08z"
                            fill="#fbbc05"
                          />
                          <path
                            d="M95.248 37.949c14.021 0 26.648 4.823 36.608 14.299l27.44-26.75C142.753 9.167 121.054 0 95.248 0 58.013 0 25.89 21.383 10.218 52.561l31.651 24.561c7.533-22.514 28.574-39.173 53.379-39.173z"
                            fill="#ea4335"
                          />
                        </g>
                      </svg>
                    )}
                    {review.platform === 'Facebook' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 14222 14222"
                      >
                        <circle
                          cx="7111"
                          cy="7112"
                          r="7111"
                          fill="#1977f3"
                        />
                        <path
                          d="M9879 7112l-400-3197h-3078v-2075c0-874 428-1725 1803-1725h1396v-2715s-1268-216-2479-216c-2529 0-4180 1532-4180 4305v2426h-2809v3197h2809v7731c562 88 1139 134 1725 134s1160-46 1725-134v-7731h2604z"
                          fill="#fff"
                        />
                      </svg>
                    )}
                    {review.platform === 'Yelp' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 926.7 1000"
                      >
                        <path
                          d="M23.6 587.4c-3.2 19-6.2 38.9-8.8 58.8-11.9 86.5-8.2 161 34.4 232.9 21.9 37 59.4 57.9 100.2 67.2 39.9 9.1 81.5 10.2 123 10.2 67.9 0 139.2-4.5 205.9-10.2 20.6-1.7 25.7-9.9 21.2-29.6-14.3-65.2-28.2-130.5-42.7-195.7-10.8-48.2-22.2-96.3-33.4-144.4-7.2-31-13.4-37.2-46.4-37.1-60.3.2-120.6 4.1-180.2 11.5-39.8 4.9-80.4 7.9-119.6 16.6-37.7 8.4-69.9 22.6-87.1 59.3-12.5 26.5-15.4 56.6-19.2 86-1.8 16.3-3 32.8-4.5 49.1-.5 5-1.9 9.8-2.8 14.7v-.3zm825.5 138.1c-5.2-54-13.9-107.9-31.3-159.1-12.7-37.5-30.3-71.4-65.7-90.7-23.4-12.7-49.2-16.7-75.2-18.1-32-1.8-64.2-1.2-96.4-1.2-26.9 0-53.9.7-80.8 1.1-11.5.2-16.2 4.4-14.1 16.1 8.9 52.6 18.3 105.2 27.5 157.8 9.6 55.3 19 110.7 28.7 166 3.9 22.5 8.6 44.9 12.8 67.4 3.8 20.4 9.9 24.8 30.3 24 61.6-2.4 123.3-4.2 184.9-7.2 26.1-1.3 52.7-3.4 77.7-10.2 59.2-16.2 85.8-58.5 93.2-115.5 5.1-40.2 6.7-80.6 8.4-121zm-664.2-341.5c24.5-18 26.2-46.8 27.3-74 5.1-121.1-11.3-236.1-70.6-342.5-24.6-44.1-56.7-79.6-111.3-89.5-35.8-6.5-71.1-2.2-105.5 9.5-63.3 21.4-111 62.9-142.1 122.1-35.3 67.2-41.1 139.4-41.3 213.5.2 20.4 0 41.3 9.2 60.3 16.5 34.1 47.1 54.1 82.9 64.1 33.7 9.4 67.3 13.5 101.7 14.7 50.6 1.7 101.5 3.4 152-2.1 26.2-2.9 52.9-5.8 73.8-16.7 16-8.4 24.8-21 20.7-38.9-5.9-25.4-52.3-27.1-78.1-28.6-47.3-2.6-94.5-3.6-139.2-28.2-9.6-5.3-18.9-11.6-25.5-20.1-13.2-17.1-13.6-39.4-10.1-60.1 2.3-13.6 5.2-27.1 7.8-40.7 2.7-13.2 14.4-17.6 26.7-18.9 18.1-1.9 36.3-3.9 54.5-3.9 35.6 0 71.2-.9 106.7-2.1 14.8-.5 29.5-2.8 44.1-5.1 23.9-3.7 31.1-12.9 29.4-36.8-3.5-48.8-60.7-113.6-137.5-96-48.2 11-98.7 14-142.5 38.9-43.6 24.8-71.6 61.5-86.8 109.8-15.5 49.1-18.9 99.4-17.9 150.2.2 10.8-1.9 23.4 9.2 30.5 20.1 12.7 41 22.7 63.8 28.4 12.7 2.6 25.4 5.1 38.1 7.7-.2 5.3 3.5 5.8 7.2 6.4 27.6 4.4 55.2 9.3 83.1 10.8 36.3 1.9 72.8-.5 109-3.2 23-1.8 45.7-5.3 68.2-11.7 9.3-2.6 16.6-7.1 24.1-12.8zm177 488.8c20.8-2.5 25.7-7.6 28.9-28 5.9-38.5 10.9-77 16.1-115.5 5.3-39.5 10.3-79.1 15.5-118.7 2.2-16.7 4.5-33.4 6.7-50.1 1.5-11.5-3.6-17-15.3-16.9-5.1.1-10.2.3-15.3.5-41.2 1.8-82.5 3.7-123.7 5.3-9.2.3-18.4.1-27.5 1.3-13.1 1.7-19.1 8.9-21.9 21.7-4.8 22-6.5 44.8-9.5 67.2-8.4 63.2-17 126.3-25.4 189.5-2.8 21.2-4.3 42.5-7.7 63.5-3.7 22.8 4.1 30.8 27 33.4 40.4 4.5 81.2 4.8 122 5.9 10 .3 20.1.9 30.1-.1 1.4-.1 2.6-1.7 4-2.5l-3.5-4.1c-.2-17.6-.4-35.2-.5-52.4zm326.8-613.9c-.9-25.6-10.3-47.2-22.9-68.1-16.3-27-38.8-48.2-65.9-64.8-22.2-13.6-45.8-18.6-71.1-10.1-25.3 8.5-44.6 25.7-60.3 47.1-21.8 29.7-34.2 63.5-42.3 99.5-3.1 13.7-5.3 27.6-8.3 41.3-11.1 50.6-22.6 101.1-33.5 151.7-8.4 38.7-16.6 77.4-24.2 116.2-2.3 11.6 2.7 19.2 14.5 22.5 14.8 4.2 29.8 6.3 45.1 3.7 35.2-5.9 70.3-13.3 102.4-32.1 67.6-39.7 104.6-100.4 113.9-178.7 5.5-46.4 8.4-93.2 10.2-139.9.7-16.9 1.1-33.9-1.4-50.8-1.2-8.9.8-17.9 1.3-26.9l-5.4-.5c14.9-3.4 31.4-7.1 47.9-10.1zm122.9 497.3c18.9-14.1 19.7-33.2 19.7-53.6 0-38.1.3-76.3-2.5-114.3-6-78.5-15.9-156.5-31.2-233.6-3.9-19.7-9.7-39.1-15.7-58.3-1.9-6.1-6.3-11.9-11.2-16.2-23.3-19.9-79.6-13.7-98.2 9.3-19.7 24.3-28.5 53.2-35.4 82.9-21.1 91.1-34.1 183.8-38.9 277.6-1.4 26.7-.5 54.1 3.7 80.4 3.9 24.4 20.5 40.2 43.9 47.3 38.2 11.5 76.9 21.1 118.1 14.3 16.8-2.8 32.3-8.5 47.7-19.3v-16.5z"
                          fill="#d32323"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium">{review.platform}</span>
                </div>
                {renderStars(review.rating)}
              </div>
              
              <p className="text-sm mb-3">
                {review.text}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-medium">
                    {review.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="text-xs font-medium">{review.author}</span>
                </div>
                <span className="text-xs text-text-secondary">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              
              <div className="mt-3 border-t border-gray-700 pt-2 flex gap-2">
                <button className="bg-background-dark hover:bg-gray-700 text-xs py-1 px-3 rounded flex items-center gap-1 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  <span>Like</span>
                </button>
                <button className="bg-background-dark hover:bg-gray-700 text-xs py-1 px-3 rounded flex items-center gap-1 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Review Request Campaign */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Review Request Campaign</h3>
          <button className="btn btn-primary text-sm">Send New Requests</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Requests Sent" 
            value="42"
            subtitle="this month"
            change={15}
          />
          <StatCard 
            title="Response Rate" 
            value="38%"
            subtitle="16 responses from 42 requests"
            change={8}
          />
          <StatCard 
            title="Avg. Rating from Requests" 
            value="4.9"
            subtitle="from request campaign"
            change={0.3}
          />
          <StatCard 
            title="Pending Requests" 
            value="26"
            subtitle="sent in last 14 days"
          />
        </div>
      </div>
    </div>
  );
};

export default Reputation;