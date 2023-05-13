import React, { Component } from "react";
import Slider from "react-slick";
import "./ProductSlider.scss";
import "./slider-scss/ProductSliders.scss";
import "./slider-scss/ProductSliderTheme.scss";
import slide1 from "./assets/slider1.png";
import slide2 from "./assets/slider2.png";
import slide3 from "./assets/slider3.png";
import slide4 from "./assets/slider4.png";
import slide5 from "./assets/slider5.png";
import slide6 from "./assets/slider6.png";
import slide7 from "./assets/slider7.png";
import slide8 from "./assets/slider8.png";
import slide9 from "./assets/slider9.png";
import line from "./assets/Line.svg";

const slides = [
  {
    image: slide1,
    title: "Beach Spider Lily",
    price: "$129.00",
  },
  {
    image: slide2,
    title: "Blushing Bromeliad",
    price: "$139.00",
  },
  {
    image: slide3,
    title: "Aluminum Plant",
    price: "$179.00",
  },
  {
    image: slide4,
    title: "Bird's Nest Fern",
    price: "$99.00",
  },
  {
    image: slide5,
    title: "Chinese Evergreen",
    price: "$39.00",
  },
  {
    image: slide6,
    title: "Majesty Palm",
    price: "$150.00",
  },
  {
    image: slide7,
    title: "Purple Waffle Plant",
    price: "$140.00",
  },
  {
    image: slide8,
    title: "Snake Planty",
    price: "$138.00",
  },
  {
    image: slide9,
    title: "String of Pearls",
    price: "$145.00",
  },
  {
    image: slide4,
    title: "Peace Lily",
    price: "$189.00",
  },
];

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="header">
        <span className="products">Releted Products</span>
        <div className="line">
          <img src={line} alt="" />
        </div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div className="slide" key={slide.title}>
              <div className="top">
                <img src={slide.image} alt="" />
              </div>
              <div className="bottom">
                <div className="title">{slide.title}</div>
                <div className="price">{slide.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
