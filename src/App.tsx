import React, { useEffect, useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Container, CssBaseline, Grid } from '@mui/material'
import Header from './components/Header'
import Sidebar from './components/Siderbar'
import Chart from './components/Chart'
import DataTable from './DataTable/DataTable'
import { fetchData } from './api'

// Defining interfaces based on data.json.
interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesalesSales: number; 
  unitsSold: number;
  retailerMargin: number;
}

interface ProductData {
  id: string;
  tittle: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Array<{
    customer: string;
    review: string;
    score: number;
  }>
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesData[];
}


const App: React.FC = () => {

  //Initiailizing Product data with empty array. 
  const [data, setData] = useState<ProductData[]>([]);
  // Set it to true to simulate the data is fectching. This is usefull because it could prevent other components to render without any data. 
  const [loading, setLoading] = useState(true);

  // UseEffect allows to perform side effects. (e.g.,fetching data in this case). It's created with an empty dependency list [], to run only once after the initial render. In this case we need it only once to fetch the data.
  useEffect(()=>{
    fetchData().then((data)=>{
      setData(data as ProductData[]);
      setLoading(false);
    });
  }, []);


  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Routes>
              <Route path="/" element={<Chart />} />
            </Routes>
            <DataTable />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
