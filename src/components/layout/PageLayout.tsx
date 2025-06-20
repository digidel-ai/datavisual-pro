import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      <Sidebar />
      <Header clientName="Mountain View Roofing" accountManager="Sarah Johnson" />
      <main className="pt-24 pl-16 md:pl-60 pr-4 md:pr-6 pb-6">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;