import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import CutomButton from './atoms/CutomButton';
import Header from './organisms/Header';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
    </div>
  );
}

export default App;
