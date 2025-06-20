import React, { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  icon?: ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  change,
  icon,
  className = '',
}) => {
  const renderChange = () => {
    if (change === undefined) return null;
    
    const isPositive = change >= 0;
    const Icon = isPositive ? TrendingUp : TrendingDown;
    
    return (
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        <Icon size={14} />
        <span>{isPositive ? '+' : ''}{change}%</span>
      </div>
    );
  };

  return (
    <div className={`stat-card ${className}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
        {icon && <div className="text-text-secondary">{icon}</div>}
      </div>
      <div className="stat-value">{value}</div>
      {subtitle && <div className="stat-label">{subtitle}</div>}
      {renderChange()}
    </div>
  );
};

export default StatCard;