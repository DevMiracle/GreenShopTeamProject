import './Footer.scss';
import facebook from './assets/Facebook.png';
import gardencare from './assets/gardencare.png';
import greenshop from './assets/Greenshop.png';
import instagram from './assets/Instagram.png';
import linkedin from './assets/Linkedin.png';
import location from './assets/Location.png';
import mail from './assets/Mail.png';
import number from './assets/Number.png';
import pay from './assets/Pay.png';
import plantrenovation from './assets/plantrenovation.png';
import twitter from './assets/Twitter.png';
import union from './assets/Union.png';
import watering from './assets/watering.png';

// Uncomment this when you start to work
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="invitation">
          <div className="left">
            <div className="boxes">
              <img src={gardencare} alt="" />
              <h5>Garden Care</h5>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="boxes">
              <img src={plantrenovation} alt="" />
              <h5>Plant Renovation</h5>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="boxes">
              <img src={watering} alt="" />
              <h5>Watering Graden</h5>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
          </div>
          <div className="right">
            <form action="">
              <p>Would you like to join newsletters?</p>
              <div className="join">
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
            </form>
            <p>
              We usually post offers and challenges in newsletter. We’re your online houseplant destination.
              We offer a wide range of houseplants and accessories shipped directly from our (green)house to
              yours!{' '}
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="greenshop">
            <img src={greenshop} alt="" />
            <p>GREENSHOP</p>
          </div>
          <div className="location">
            <img src={location} alt="" />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="location">
            <img src={mail} alt="" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="location">
            <img src={number} alt="" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="account">
              <p>My Account</p>
              <ul>
                <li>My Account</li>
                <li>Our stores</li>
                <li>Contact us</li>
                <li>Carees</li>
                <li>Specials</li>
              </ul>
            </div>
            <div className="account">
              <p>Help & Guide</p>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </div>
            <div className="account">
              <p>Categories</p>
              <ul>
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="social">
              <p>Social Media</p>
              <div className="logos">
                <div className="box">
                  <img src={facebook} alt="" />
                </div>
                <div className="box">
                  <img src={instagram} alt="" />
                </div>
                <div className="box">
                  <img src={twitter} alt="" />
                </div>
                <div className="box">
                  <img src={linkedin} alt="" />
                </div>
                <div className="box">
                  <img src={union} alt="" />
                </div>
              </div>
            </div>
            <div className="pay">
              <p>We Accept</p>
              <img src={pay} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
