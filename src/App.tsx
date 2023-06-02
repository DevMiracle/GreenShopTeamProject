import './App.css';
import { Header } from './shared/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './shared/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductCartPage from './pages/ProductCartPage/ProductCartPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductViewPage />} />
          <Route path="/product-cart" element={<ProductCartPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
