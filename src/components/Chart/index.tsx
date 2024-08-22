import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesData } from '../../App';
import calculateMonthlySums from './calculateMonthlySums';
import './index.scss';

interface ChartProps {
  salesData: SalesData[];
}

const Chart: React.FC<ChartProps> = ({ salesData }) => {
  // We could pass the year depending on the sales data, this could be a component in the future to allow the user to type the year.
  const montlySums = calculateMonthlySums(salesData, 2017);

  // To convert the diplay key to camel case.
  const displayKey = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Retail Sales</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={montlySums} className="line-chart">
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* The stroke library does not support classes thats why I let the stroke color explicit here. */}
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#4dabf6"
            strokeWidth={3}
            dot={false}
            name={displayKey('retailSales')}
          />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#9ca7c0"
            strokeWidth={3}
            dot={false}
            name={displayKey('wholesaleSales')}
          />
          <Line
            type="monotone"
            dataKey="retailerMargin"
            stroke="#052849"
            strokeWidth={3}
            dot={false}
            name={displayKey('retailerMargin')}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
