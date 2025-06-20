import React from 'react';
import { 
  AreaChart, 
  Area, 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

type ChartData = Array<Record<string, any>>;

interface ChartProps {
  type: 'line' | 'area' | 'bar' | 'pie';
  data: ChartData;
  xKey: string;
  yKeys: string[];
  colors?: string[];
  height?: number;
  legendPosition?: 'top' | 'right' | 'bottom' | 'left';
}

const Chart: React.FC<ChartProps> = ({
  type,
  data,
  xKey,
  yKeys,
  colors = ['#5D3FD3', '#F5B041', '#2ECC71', '#E74C3C'],
  height = 300,
  legendPosition = 'bottom',
}) => {
  const renderChart = () => {
    const chartProps = {
      data,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      },
    };

    switch (type) {
      case 'line':
        return (
          <LineChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey={xKey} stroke="#B3B3B3" />
            <YAxis stroke="#B3B3B3" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: '#333',
                color: '#FFF',
              }}
            />
            <Legend layout={legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal'} align={legendPosition === 'top' || legendPosition === 'bottom' ? 'center' : legendPosition} />
            {yKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        );
        
      case 'area':
        return (
          <AreaChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey={xKey} stroke="#B3B3B3" />
            <YAxis stroke="#B3B3B3" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: '#333',
                color: '#FFF',
              }}
            />
            <Legend layout={legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal'} align={legendPosition === 'top' || legendPosition === 'bottom' ? 'center' : legendPosition} />
            {yKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.3}
              />
            ))}
          </AreaChart>
        );
        
      case 'bar':
        return (
          <BarChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey={xKey} stroke="#B3B3B3" />
            <YAxis stroke="#B3B3B3" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: '#333',
                color: '#FFF',
              }}
            />
            <Legend layout={legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal'} align={legendPosition === 'top' || legendPosition === 'bottom' ? 'center' : legendPosition} />
            {yKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
              />
            ))}
          </BarChart>
        );
        
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey={yKeys[0]}
              nameKey={xKey}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: '#333',
                color: '#FFF',
              }}
            />
            <Legend layout={legendPosition === 'left' || legendPosition === 'right' ? 'vertical' : 'horizontal'} align={legendPosition === 'top' || legendPosition === 'bottom' ? 'center' : legendPosition} />
          </PieChart>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;