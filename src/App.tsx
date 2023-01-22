import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import Products from './organisms/Products';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
