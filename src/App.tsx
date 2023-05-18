import './App.css';
import { Header } from './shared/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './shared/Footer/Footer';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
