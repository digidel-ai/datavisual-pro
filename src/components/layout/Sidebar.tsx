import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Search, Users, Target, Globe, PenTool as Tool, Star, MessageSquare, CreditCard, Settings, LogOut } from 'lucide-react';

const LOGO_URL = '/src/assets/ROGUE.png';

interface SidebarProps {
  // Potential future props
}

const Sidebar: React.FC<SidebarProps> = () => {
  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/seo-analytics', icon: <Search size={20} />, label: 'SEO Analytics' },
    { path: '/lead-intelligence', icon: <Users size={20} />, label: 'Lead Intelligence' },
    { path: '/paid-ads', icon: <Target size={20} />, label: 'Paid Ads' },
    { path: '/website-development', icon: <Globe size={20} />, label: 'Website Development' },
    { path: '/website-maintenance', icon: <Tool size={20} />, label: 'Website Maintenance' },
    { path: '/reputation', icon: <Star size={20} />, label: 'Reputation' },
    { path: '/communication', icon: <MessageSquare size={20} />, label: 'Communication' },
    { path: '/billing', icon: <CreditCard size={20} />, label: 'Billing' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-16 md:w-60 bg-background-sidebar border-r border-gray-800 flex flex-col z-10 transition-all duration-300">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Rogue Move Logo" className="w-8 h-8" />
          <div className="text-secondary font-bold hidden md:block">Rogue Move</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''} group`
                }
                title={item.label}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="hidden md:block ml-3">{item.label}</span>
                </div>
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap md:hidden">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="nav-link w-full group" title="Logout">
          <div className="flex items-center">
            <LogOut size={20} />
            <span className="hidden md:block ml-3">Logout</span>
          </div>
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap md:hidden">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;