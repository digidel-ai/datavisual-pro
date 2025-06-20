import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import PageLayout from './components/layout/PageLayout';
import Dashboard from './pages/Dashboard';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import Reputation from './pages/Reputation';
import Settings from './pages/Settings';
import Billing from './pages/Billing';
import SEOAnalytics from './pages/SEOAnalytics';
import PaidAds from './pages/PaidAds';
import Communication from './pages/Communication';
import LeadIntelligence from './pages/LeadIntelligence';
import { DateRangeProvider } from './context/DateRangeContext';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <DateRangeProvider>
        <Router>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/seo-analytics" element={<SEOAnalytics />} />
              <Route path="/lead-intelligence" element={<LeadIntelligence />} />
              <Route path="/paid-ads" element={<PaidAds />} />
              <Route path="/website-development" element={<WebsiteDevelopment />} />
              <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
              <Route path="/reputation" element={<Reputation />} />
              <Route path="/communication" element={<Communication />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </PageLayout>
        </Router>
      </DateRangeProvider>
    </ThemeProvider>
  );
}

export default App;