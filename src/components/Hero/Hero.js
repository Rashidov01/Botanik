import React from "react";
import "./Hero.scss";
import Slider from "react-slick";
import Img from "../../assets/img/hero-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="right-arrow">
      <div className={className} style={{ ...style, display: "none" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="left-arrow">
      <div
        className={className}
        style={{ ...style, display: "none", cursor: "pointer" }}
      />
    </div>
  );
}

export default function Hero() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__entrance entrance-hero">
          <h1 className="entrance-hero__title">BotanikUz</h1>
          <ul className="socials">
            <li className="socials__item">
              <a className="socials__link" href="#">
                <i class="socials__img bx bxl-telegram"></i>
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="#">
                <i class="socials__img bx bxl-instagram"></i>
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="#">
                <i class="socials__img bx bxl-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="hero__slider slider-hero">
          <div className="holder">
            <Slider {...settings}>
              <div className="wrapper">
                <img className="slider-hero__img" src={Img} alt="hero img" />
              </div>
              <div className="wrapper">
                <img className="slider-hero__img" src={Img} alt="hero img" />
              </div>
              <div className="wrapper">
                <img className="slider-hero__img" src={Img} alt="hero img" />
              </div>
              <div className="wrapper">
                <img className="slider-hero__img" src={Img} alt="hero img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
