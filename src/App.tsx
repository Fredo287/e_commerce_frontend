/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import ProductsTemplate from './templates/ProductsTemplate';
import ProductTemplate from './templates/ProductTemplate';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import Checkout from './templates/Checkout';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductsTemplate />} />
          <Route path="/:id" element={<ProductTemplate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
