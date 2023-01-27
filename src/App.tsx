/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import ProductsTemplate from './components/templates/ProductsTemplate';
import ProductTemplate from './components/templates/ProductTemplate';
import SignIn from './components/templates/SignIn';
import SignUp from './components/templates/SignUp';
import Checkout from './components/templates/Checkout';

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
