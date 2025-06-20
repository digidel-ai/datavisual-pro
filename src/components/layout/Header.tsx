import React from 'react';
import { Calendar, Download, Phone, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface HeaderProps {
  clientName: string;
  accountManager: string;
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-background-card transition-colors ml-2"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-text-secondary" />
      ) : (
        <Moon size={18} className="text-text-secondary" />
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ clientName, accountManager }) => {
  return (
    <header className="fixed top-0 left-16 md:left-60 right-0 h-16 bg-background-dark border-b border-gray-800 flex items-center justify-between px-4 md:px-6 z-10">
      <div>
        <h1 className="text-lg md:text-xl font-medium">{clientName}</h1>
        <p className="text-xs md:text-sm text-text-secondary">
          Cosmic Plan • Dedicated Account Manager: {accountManager}
        </p>
      </div>
      
      <div className="flex gap-2 md:gap-3">
        <ThemeToggle />
        <button className="btn btn-outline hidden md:flex items-center gap-2 text-sm">
          <Calendar size={16} />
          <span>Schedule Call</span>
        </button>
        <button className="btn btn-outline hidden md:flex items-center gap-2 text-sm">
          <Download size={16} />
          <span>Download Report</span>
        </button>
        <button className="btn btn-primary flex items-center gap-2 text-sm">
          <Phone size={16} />
          <span className="hidden md:inline">Contact Us</span>
        </button>
      </div>
    </header>
  );
};

export default Header;