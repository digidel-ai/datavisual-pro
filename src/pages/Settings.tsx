import React, { useState } from 'react';
import { users, permissions } from '../utils/mockData';
import { Trash2, Edit2, Save, User } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('userManagement');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'userManagement':
        return <UserManagementTab />;
      case 'permissions':
        return <PermissionsTab />;
      case 'notifications':
        return <NotificationsTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <UserManagementTab />;
    }
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Settings & Permissions</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'userManagement'
              ? 'text-primary border-b-2 border-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('userManagement')}
        >
          User Management
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'permissions'
              ? 'text-primary border-b-2 border-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('permissions')}
        >
          Permissions
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'notifications'
              ? 'text-primary border-b-2 border-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'profile'
              ? 'text-primary border-b-2 border-primary'
              : 'text-text-secondary hover:text-text-primary'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          Your Profile
        </button>
      </div>
      
      {renderTabContent()}
    </div>
  );
};

const UserManagementTab: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-4">User Management</h3>
      <p className="text-text-secondary mb-6">
        Add or manage users who can access this dashboard.
      </p>
      
      <div className="table-container mb-6">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="font-medium">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.lastLogin}</td>
                <td>
                  <button className="btn text-xs bg-primary/20 text-primary hover:bg-primary/30 py-1 px-3">
                    <Edit2 size={14} className="mr-1" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="btn btn-primary">
        Add New User
      </button>
    </div>
  );
};

const PermissionsTab: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-4">Role Permissions</h3>
      <p className="text-text-secondary mb-6">
        Different user roles have different access levels to the dashboard.
      </p>
      
      <div className="space-y-8">
        {Object.entries(permissions).map(([role, info]) => (
          <div key={role} className="border border-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-medium capitalize mb-2">{role}</h4>
            <p className="text-text-secondary mb-4">{info.description}</p>
            
            <h5 className="text-sm font-medium mb-2">Capabilities:</h5>
            <ul className="list-disc list-inside space-y-1">
              {info.capabilities.map((capability, index) => (
                <li key={index} className="text-sm text-text-secondary">{capability}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotificationsTab: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
      <p className="text-text-secondary mb-6">
        Configure which notifications you receive and how they are delivered.
      </p>
      
      <div className="space-y-6">
        <div className="border-b border-gray-700 pb-4">
          <h4 className="text-md font-medium mb-4">Email Notifications</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly Performance Report</p>
                <p className="text-xs text-text-secondary">Receive a summary of your marketing performance every Monday</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Review Alerts</p>
                <p className="text-xs text-text-secondary">Get notified when new reviews are posted about your business</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Campaign Status Updates</p>
                <p className="text-xs text-text-secondary">Receive updates about your paid ad campaigns</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-700 pb-4">
          <h4 className="text-md font-medium mb-4">SMS Notifications</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Lead Alerts</p>
                <p className="text-xs text-text-secondary">Get notified when new leads come in</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Critical Issues</p>
                <p className="text-xs text-text-secondary">Get alerts about website downtime or critical issues</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-md font-medium mb-4">Dashboard Notifications</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Team Messages</p>
                <p className="text-xs text-text-secondary">Show notifications for new team messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Task Reminders</p>
                <p className="text-xs text-text-secondary">Show reminders for upcoming tasks and deadlines</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const ProfileTab: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-lg font-medium mb-4">Your Profile</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-background-dark border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="John Smith"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-background-dark border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="john@mountainviewroofing.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-background-dark border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="(555) 123-4567"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-background-dark border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="********"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-3xl font-bold mb-4">
              JS
            </div>
            
            <button className="btn btn-outline mb-2">
              <User size={16} className="mr-2" />
              Change Avatar
            </button>
            
            <p className="text-xs text-text-secondary">
              Upload an image (JPG or PNG). Max size: 1MB
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-4">
            <h4 className="text-md font-medium mb-2">Two-Factor Authentication</h4>
            <p className="text-sm text-text-secondary mb-3">
              Add an extra layer of security to your account by enabling two-factor authentication.
            </p>
            
            <button className="btn btn-outline text-sm">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="btn btn-primary">
          <Save size={16} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;