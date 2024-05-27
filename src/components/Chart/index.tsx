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

//Mock data to test Layout
const data = [
  { name: 'JAN', RetailSales: 4000, WholesaleSales: 2400 },
  { name: 'FEB', RetailSales: 3000, WholesaleSales: 1398 },
  { name: 'MAR', RetailSales: 2000, WholesaleSales: 9800 },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="RetailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="WholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
