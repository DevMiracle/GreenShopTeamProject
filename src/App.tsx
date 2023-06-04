import './App.css';
import { CartProvider } from './pages/CartPage/components/CartContext';
import { Header } from './shared/Header/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import Footer from './shared/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';
import React from 'react';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
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
