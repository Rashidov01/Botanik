import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrowCard(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="right-arrow-card">
      <div className={className} style={{ ...style, display: "none" }} />
    </div>
  );
}

function SamplePrevArrowCard(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="left-arrow-card">
      <div className={className} style={{ ...style, display: "none" }} />
    </div>
  );
}

export default function CardSlider({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    nextArrow: <SampleNextArrowCard />,
    prevArrow: <SamplePrevArrowCard />,
  };
  return <Slider {...settings}> {children} </Slider>;
}
