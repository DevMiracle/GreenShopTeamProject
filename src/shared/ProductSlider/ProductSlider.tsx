import './ProductSlider.scss';
import './slider-scss/ProductSliderTheme.scss';
import './slider-scss/ProductSliders.scss';
import React from 'react';
import Slider from 'react-slick';
import SliderSettings from '../SliderSettings/SliderSettings';
import line from './assets/Line.svg';
import slide1 from './assets/slider1.png';
import slide2 from './assets/slider2.png';
import slide3 from './assets/slider3.png';
import slide4 from './assets/slider4.png';
import slide5 from './assets/slider5.png';
import slide6 from './assets/slider6.png';
import slide7 from './assets/slider7.png';
import slide8 from './assets/slider8.png';
import slide9 from './assets/slider9.png';

const slides = [
  {
    image: slide1,
    title: 'Beach Spider Lily',
    price: '$129.00',
  },
  {
    image: slide2,
    title: 'Blushing Bromeliad',
    price: '$139.00',
  },
  {
    image: slide3,
    title: 'Aluminum Plant',
    price: '$179.00',
  },
  {
    image: slide4,
    title: "Bird's Nest Fern",
    price: '$99.00',
  },
  {
    image: slide5,
    title: 'Chinese Evergreen',
    price: '$39.00',
  },
  {
    image: slide6,
    title: 'Majesty Palm',
    price: '$150.00',
  },
  {
    image: slide7,
    title: 'Purple Waffle Plant',
    price: '$140.00',
  },
  {
    image: slide8,
    title: 'Snake Planty',
    price: '$138.00',
  },
  {
    image: slide9,
    title: 'String of Pearls',
    price: '$145.00',
  },
  {
    image: slide4,
    title: 'Peace Lily',
    price: '$189.00',
  },
];

export const ProductSlider = () => {
  return (
    <div className="product-header">
      <span className="products">Related Products</span>
      <div className="line">
        <img src={line} alt="" />
      </div>
      <Slider {...SliderSettings}>
        {slides.map((slide) => (
          <div className="product-slide" key={slide.title}>
            <div className="top">
              <a href="/">
                <img src={slide.image} alt="" />
              </a>
            </div>
            <div className="bottom">
              <div className="title">
                <a href="/">{slide.title}</a>
              </div>
              <div className="price">{slide.price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
