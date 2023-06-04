import { Link } from 'react-router-dom';
import { useCart } from '../../pages/CartPage/components/CartContext';
import React, { FC, useState } from 'react';
import burgerIcon from './assets/BurgerMenuIcon.svg';
import cartIcon from './assets/CartIcon.svg';
import loginIcon from './assets/Logout.svg';
import mainLogo from './assets/MainLogo.svg';
import mobileLogo from './assets/MobileLogo.svg';

import './Header.scss';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleBurgerClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  function handleBurgerKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      // Perform the same action as the click event
      handleBurgerClick();
    }
  }

  const { cartItems } = useCart();

  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="menu">
      <div
        className="burger-menu"
        onClick={handleBurgerClick}
        onKeyDown={handleBurgerKeyDown}
        role="button"
        tabIndex={0}
      >
        <button>
          <img src={burgerIcon} alt="Burger icon" />
        </button>
      </div>
      <div className={`burger-menu-list ${isMenuOpen ? 'overlay' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Plant Care
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Blogs
            </Link>
          </li>
          <li className="login-color">
            <Link to="/" onClick={handleLinkClick}>
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={mainLogo} alt="Main logo" className="full-logo" />
        </Link>
        <Link to="/">
          <img src={mobileLogo} alt="Mobile logo" className="mobile-logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/" onClick={handleLinkClick}>
          Shop
        </Link>
        <Link to="/" onClick={handleLinkClick}>
          Plant Care
        </Link>
        <Link to="/" onClick={handleLinkClick}>
          Blogs
        </Link>
      </nav>
      <div className="shopping">
        <Link to="/cart" className="cart-link">
          <div className="cart">
            <img src={cartIcon} alt="Cart icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
        <div className="login-box">
          <Link to="" className="login-box-link">
            <button className="login-button">
              <img src={loginIcon} alt="Login icon" />
              <span className="login-text">Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
