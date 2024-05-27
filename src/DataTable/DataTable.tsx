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

const DataTable: React.FC = () => {
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
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.weekEnding}</TableCell>
              <TableCell>{row.retailSales}</TableCell>
              <TableCell>{row.wholesaleSales}</TableCell>
              <TableCell>{row.unitsSold}</TableCell>
              <TableCell>{row.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
