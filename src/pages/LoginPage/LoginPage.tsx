import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import close from './assets/close.svg';
import google from './assets/Group.svg';
import facebook from './assets/Vector (12).svg';
import logo from './assets/Vector (13).svg';
import googleMobile from './assets/Group (1).svg';
import facebookMobile from './assets/Vector (14).svg';

export const LoginPage = (props:any) => {
  const {setIsOpen} = props;
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <div className="content">
<<<<<<< Updated upstream
      <div className="stroke">
        <Link to="/">
=======
      <button
      onClick={() => setIsOpen(false)}
      className="stroke">
        <Link to="">
>>>>>>> Stashed changes
          <img src={close} alt="" />
        </Link>
      </button>
      <div className="container">
        <div className="logo">
          <div className="logoImg">
            <Link to="">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="logoWord">
            <Link to="">greenshop</Link>
          </div>
        </div>
        <div className="group">
          <div className="login">
            <Link to="">Login</Link>
          </div>
          <hr />
          <div className="register">
            <Link to="">Register</Link>
          </div>
        </div>
        <form className="loginForm">
          <span> Enter your username and password to login.</span>
          <input type="email" className="text" />
          <input
            value={password}
            type={visible ? 'password' : 'text'}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />
          <button className="hideShowIcon" onClick={() => setVisible(!visible)}>
            {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </form>
        <div className="forgotPsw">
          <Link to="">
            <span>Forgot Password?</span>
          </Link>
        </div>
        <div className="loginButton">
          <button className="loginBtn">Login</button>
        </div>
        <div className="divider">
          <hr />
          Or login with
          <hr />
        </div>
        <div className="buttons">
          <Link to="">
            <button className="googleBtn">
              <img src={google} alt="" />
              <img className="googleMobileLogo" src={googleMobile} alt="" />
              Login with Google
            </button>
          </Link>
          <Link to="">
            <button className="facebookBtn">
              <img src={facebook} alt="" />
              <img className="facebookMobileLogo" src={facebookMobile} alt="" />
              Login with Facebook
            </button>
          </Link>
        </div>
        <div className="signUp">
          <p>
            Don’t have an account?
            <Link to="">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
