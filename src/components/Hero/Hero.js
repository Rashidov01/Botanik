import React from "react";
import "./Hero.scss";
import Img from "../../assets/img/hero-img.png";
import Next from "../../assets/icon/back.svg";
import Prev from "../../assets/icon/forw.svg";
import Telegram from "../../assets/icon/telegram.svg";
import Instagram from "../../assets/icon/facebook.svg";
import Facebook from "../../assets/icon/instagram.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__entrance entrance-hero">
          <h1 className="entrance-hero__title">BotanikUz</h1>
          <ul className="socials">
            <li className="socials__item">
              <a className="socials__link" href="#">
                <img
                  className="socials__img"
                  src={Telegram}
                  alt="telegram logo"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="#">
                <img
                  className="socials__img"
                  src={Instagram}
                  alt="instagram logo"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li className="socials__item">
              <a className="socials__link" href="#">
                <img
                  className="socials__img"
                  src={Facebook}
                  alt="facebook logo"
                  width="30"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="hero__slider slider-hero">
          <img className="slider-hero__img" src={Img} alt="hero img" />
          <div className="slider-btns btn-holder">
            <button className="slider-hero__btn btn-next" type="button">
              <img className="slider-btn__icon" src={Next} alt="next icon" />
            </button>
            <button className="slider-hero__btn btn-prev" type="button">
              <img className="slider-btn__icon" src={Prev} alt="prev icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
