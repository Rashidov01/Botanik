import React from "react";
import { HeroPage } from "../../components";
import "./About.scss";
import User from "../../assets/img/user.jpeg";
import Telegram from "../../assets/icon/telegram.svg";
import Instagram from "../../assets/icon/facebook.svg";
import Facebook from "../../assets/icon/instagram.svg";

export default function About() {
  return (
    <div>
      <HeroPage />
      <div className="container">
        <section className="delivery">
          <div className="delivery__inner">
            <h2 className="delivery__title">Delivery Process</h2>
            <ul className="delivery__list">
              <li className="delivery__item item-delivery">
                <span className="item-delivery__step">Step 01</span>
                <h4 className="item-delivery__title">Choose your product</h4>
                <p className="item-delivery__desc">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour. Both betanin
                </p>
              </li>
              <li className="delivery__item item-delivery">
                <span className="item-delivery__step">Step 02</span>
                <h4 className="item-delivery__title">Share your location</h4>
                <p className="item-delivery__desc">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour. Both betanin
                </p>
              </li>
              <li className="delivery__item item-delivery">
                <span className="item-delivery__step">Step 03</span>
                <h4 className="item-delivery__title">get delivery fast</h4>
                <p className="item-delivery__desc">
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour. Both betanin
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="team">
          <h2 className="team__title">Meet our team</h2>
          <ul className="team__list">
            <li className="team__item">
              <span className="team__holder">
                <img
                  className="team__img"
                  src={User}
                  alt="User img"
                  width="350"
                  height="350"
                />
                <ul className="team__social social-team">
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Telegram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Instagram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Facebook}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </span>
              <div className="team__description">
                <h3 className="team-item__name">Abdulloh Rashidov</h3>
                <span className="team-item__job">Frontend Developer</span>
              </div>
            </li>
            <li className="team__item">
              <span className="team__holder">
                <img
                  className="team__img"
                  src={User}
                  alt="User img"
                  width="350"
                  height="350"
                />
                <ul className="team__social social-team">
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Telegram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Instagram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Facebook}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </span>
              <div className="team__description">
                <h3 className="team-item__name">Ahmad Rashidov</h3>
                <span className="team-item__job">Frontend Developer</span>
              </div>
            </li>
            <li className="team__item">
              <span className="team__holder">
                <img
                  className="team__img"
                  src={User}
                  alt="User img"
                  width="350"
                  height="350"
                />
                <ul className="team__social social-team">
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Telegram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Instagram}
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-team__item">
                    <a className="social-team__link" href="#">
                      <img
                        className="team-social__icon"
                        src={Facebook}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </span>
              <div className="team__description">
                <h3 className="team-item__name">Avazbek Rashidov</h3>
                <span className="team-item__job">Frontend Developer</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
