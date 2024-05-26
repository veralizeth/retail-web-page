import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Container, CssBaseline, Grid } from '@mui/material'
import Header from './components/Header'
import Sidebar from './components/Siderbar'
import Chart from './components/Chart'
import DataTable from './DataTable/DataTable'

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


function App() {
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
              <Route path="/table" element={<DataTable />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
