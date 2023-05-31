import './App.css';
import { Header } from './shared/Header/Header';
import {LoginPage} from './pages/LoginPage/LoginPage';
import Footer from './shared/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';

function App() {
  return (
    <>
      {/* <Header /> */}
      <LoginPage/>
      {/* <HomePage />
      <Footer /> */}
    </>
  );
}

export default App;
