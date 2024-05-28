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

interface ChartProps {
  salesData: SalesData[];
}

const Chart: React.FC<ChartProps> = ({ salesData }) => {
  const montlySums = calculateMonthlySums(salesData);

  // To convert the diplay key to camel case.
  const displayKey = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={montlySums}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="retailSales"
          stroke="#8884d8"
          name={displayKey('retailSales')}
        />
        <Line
          type="monotone"
          dataKey="wholesaleSales"
          stroke="#000000"
          name={displayKey('wholesaleSales')}
        />
        <Line
          type="monotone"
          dataKey="unitsSold"
          stroke="#FF0000"
          name={displayKey('unitsSold')}
        />
        <Line
          type="monotone"
          dataKey="retailerMargin"
          stroke="#008000"
          name={displayKey('retailerMargin')}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
