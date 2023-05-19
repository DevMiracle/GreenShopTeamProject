import './HeroPart.scss';
import './Slider-scss/Slick-theme.scss';
import './Slider-scss/Slick.scss';
import React from 'react';
import Slider from 'react-slick';
import slide_1_plant from './assets/slide1.png';
import slide_2_plant from './assets/slide2.png';
import slide_3_plant from './assets/slide3.png';

export const HeroPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="wrap">
        <Slider {...settings}>
          <div className="hero-slide">
            <div className="hero-wrapper">
              <div className="left-side">
                <p className="hero-header">Welcome to GreenShop</p>
                <div className="slogan">
                  Let's Make a
                  <p className="slogan-text">
                    {' '}
                    Better <span id="planet-color">PLANET</span>
                  </p>
                </div>
                <div className="hero-footer">
                  We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our
                  plants to create an unique Urban Jungle. Order your favorite plants!
                </div>

                <button className="shop-button">SHOP NOW</button>
              </div>
              <div className="right-side">
                <picture>
                  <img src={slide_1_plant} alt="plants" />
                </picture>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="hero-wrapper">
              <div className="left-side">
                <p className="hero-header">Transform Your Space with Plants</p>
                <div className="slogan">
                  renew your home
                  <p className="slogan-text">
                    {' '}
                    with <span id="planet-color">greenery</span>
                  </p>
                </div>
                <div className="hero-footer">
                  Plants not only add a touch of nature to your home, but also purify the air, reduce stress,{' '}
                  <br /> and boost creativity. Explore our selection of plants to find the perfect ones for
                  your space.
                </div>
                <button className="shop-button">SHOP NOW</button>
              </div>
              <div className="right-side">
                <picture>
                  <img src={slide_2_plant} alt="plants" />
                </picture>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="hero-wrapper">
              <div className="left-side">
                <p className="hero-header">Elevate Your Decor with Our Plants</p>
                <div className="slogan">
                  Enhance Your Life
                  <p className="slogan-text">
                    {' '}
                    with <span id="planet-color">Natural Beauty</span>
                  </p>
                </div>
                <div className="hero-footer">
                  Our plants aren't just beautiful, they're also versatile. From modern to bohemian, our
                  collection <br /> of plants can complement any decor style. Shop now to find the perfect
                  plant for your space.
                </div>
                <button className="shop-button">SHOP NOW</button>
              </div>
              <div className="right-side">
                <picture>
                  <img src={slide_3_plant} alt="plants" />
                </picture>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroPart;
