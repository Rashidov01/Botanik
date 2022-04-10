import React from 'react';
import "./Hero.scss";
import Img from "../../assets/img/hero-img.png"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__entrance entrance-hero">
          <h1 className="entrance-hero__title">BotanikUz</h1>
        </div>
        <div className="hero__slider slider-hero">
          <img className="slider-hero__img" src={Img} alt="hero img" />
        </div>
      </div>
    </div>
  )
}
