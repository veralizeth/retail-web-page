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
import './index.scss';

interface DataTableProps {
  salesData: SalesData[];
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ salesData }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="data-table-container">
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-cell">Week Ending</TableCell>
              <TableCell className="table-cell">Retail Sales</TableCell>
              <TableCell className="table-cell">Wholesale Sales</TableCell>
              <TableCell className="table-cell">Units Sold</TableCell>
              <TableCell className="table-cell">Retailer Margin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((salesData, index) => (
              <TableRow key={index}>
                <TableCell className="table-cell">
                  {salesData.weekEnding}
                </TableCell>
                <TableCell className="table-cell">
                  {formatCurrency(salesData.retailSales)}
                </TableCell>
                <TableCell className="table-cell">
                  {formatCurrency(salesData.wholesaleSales)}
                </TableCell>
                <TableCell className="table-cell">
                  {salesData.unitsSold}
                </TableCell>
                <TableCell className="table-cell">
                  {formatCurrency(salesData.retailerMargin)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
