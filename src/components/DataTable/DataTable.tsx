import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { SalesData } from '../../App';

const rows = [
  {
    weekEnding: '2017-01-01',
    retailSales: '348123',
    wholesaleSales: '255721',
    unitsSold: 887,
    retailerMargin: '123294',
  },
  {
    weekEnding: '2017-01-08',
    retailSales: '256908',
    wholesaleSales: '189678',
    unitsSold: 558,
    retailerMargin: '67230',
  },
];

interface DataTableProps {
  salesData: SalesData[];
}

const DataTable: React.FC<DataTableProps> = ({ salesData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Week Ending</TableCell>
            <TableCell>Retail Sales</TableCell>
            <TableCell>Wholesale Sales</TableCell>
            <TableCell>Units Sold</TableCell>
            <TableCell>Retailer Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesData.map((salesData, index) => (
            <TableRow key={index}>
              <TableCell>{salesData.weekEnding}</TableCell>
              <TableCell>{salesData.retailSales}</TableCell>
              <TableCell>{salesData.wholesaleSales}</TableCell>
              <TableCell>{salesData.unitsSold}</TableCell>
              <TableCell>{salesData.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
