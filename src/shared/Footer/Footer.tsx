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

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="invitation">
          <div className="left">
            <div className="boxes">
              <img src={gardencare} alt="" />
              <h5>Garden Care</h5>
              <p>Transform your garden into a flourishing paradise with our expert garden care tips.</p>
            </div>
            <div className="boxes">
              <img src={plantrenovation} alt="" />
              <h5>Plant Renovation</h5>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="boxes">
              <img src={watering} alt="" />
              <h5>Watering Garden</h5>
              <p>Keep your garden looking fresh with our selection of watering tools and expert tips.</p>
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
            <a href="contact@greenshop.com">contact@greenshop.com</a>
          </div>
          <div className="location">
            <img src={number} alt="" />
            <a href="tel:+88 01911 717 490">+88 01911 717 490</a>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="account">
              <p>My Account</p>
              <ul>
                <a href="/">My Account</a>
                <a href="/">Our stores</a>
                <a href="/">Contact us</a>
                <a href="/">Carees</a>
                <a href="/">Specials</a>
              </ul>
            </div>
            <div className="account">
              <p>Help & Guide</p>
              <ul>
                <a href="/">Help Center</a>
                <a href="/">How to Buy</a>
                <a href="/">Shipping & Delivery</a>
                <a href="/">Product Policy</a>
                <a href="/">How to Return</a>
              </ul>
            </div>
            <div className="account">
              <p>Categories</p>
              <ul>
                <a href="/">House Plants</a>
                <a href="/">Potter Plants</a>
                <a href="/">Seeds</a>
                <a href="/">Small Plants</a>
                <a href="/">Accessories</a>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="social">
              <p>Social Media</p>
              <div className="logos">
                <div className="box">
                  <a href="/">
                    <img src={facebook} alt="" />
                  </a>
                </div>
                <div className="box">
                  <a href="/">
                    <img src={instagram} alt="" />
                  </a>
                </div>
                <div className="box">
                  <a href="/">
                    <img src={twitter} alt="" />
                  </a>
                </div>
                <div className="box">
                  <a href="/">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
                <div className="box">
                  <a href="/">
                    <img src={union} alt="" />
                  </a>
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
