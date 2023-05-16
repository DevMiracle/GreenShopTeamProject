import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="headerContainer">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkBurgerMenu">
            <img src="./images/burger.svg" alt="" />
          </label>
        <div className="logo">
          <div className="logoImg">
            <Link to="">
              <img  src="./images/Vector (9).svg" alt="" />
            </Link>
          </div>
          <div className="logoWord">
            <Link to="" className="greenWord">
              greenshop
            </Link>
          </div>
        </div>
        <nav className="mainNavigation">
          <Link to="" className="navMenu">
            Home
          </Link>
          <Link to="" className="navMenu">
            Shop
          </Link>
          <Link to="" className="navMenu">
            Plant Care
          </Link>
          <Link to="" className="navMenu">
            Blogs
          </Link>
        </nav>
        <div className="headerControl">
          <div className="searchBox">
            <Link to="" className="searchBoxButton">
              <img src="./images/Vector (10).svg" alt="" />
            </Link>
          </div>
          <div className="shoppingBox">
            <Link to="" className="shoppingBoxButton">
              <img src="./images/Vector (11).svg" alt="" />
              <span className="shoppingText">6</span>
            </Link>
          </div>
          <div className="loginBox">
            <Link to="" className="loginBoxButton">
              <button className="loginButton">
                <img src="./images/Logout.svg" alt="" />
                <span className="loginText">Login</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// export default Header
