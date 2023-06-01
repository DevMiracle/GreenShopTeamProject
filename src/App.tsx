import './App.css';
import { Header } from './shared/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import ProductCartPage from './pages/ProductCartPage/ProductCartPage';
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductViewPage />} />
        </Routes>
        <Footer />
      <ProductCartPage />
      </Router>
    </>
  );
}

export default App;
