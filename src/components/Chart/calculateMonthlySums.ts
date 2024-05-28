import { SalesData } from '../../App';

interface MonthtlySums {
  month: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const calculateMonthlySums = (salesData: SalesData[]): MonthtlySums[] => {
  const monthtlySums: { [key: string]: MonthtlySums } = {};

  salesData.forEach((sale) => {
    const date = new Date(sale.weekEnding);
    // Format yyyy-M
    const month = `${date.getFullYear()}-${date.getMonth() + 1}`;

    if (!monthtlySums[month]) {
      monthtlySums[month] = {
        month,
        retailSales: 0,
        wholesaleSales: 0,
        unitsSold: 0,
        retailerMargin: 0,
      };
    }

    monthtlySums[month].retailSales += sale.retailSales;
    monthtlySums[month].wholesaleSales += sale.wholesaleSales;
    monthtlySums[month].unitsSold += sale.unitsSold;
    monthtlySums[month].retailerMargin += sale.retailerMargin;
  });

  return Object.values(monthtlySums);
};

export default calculateMonthlySums;
