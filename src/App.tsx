import './App.css';
import { CartProvider } from './pages/CartPage/components/CartContext';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import React, { useEffect, useLayoutEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductViewPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
