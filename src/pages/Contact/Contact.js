import React from "react";
import "./Contact.scss";
import { HeroPage } from "../../components";
import location from "../../assets/icon/location-icon.svg";
import phone from "../../assets/icon/phone-icon.svg";
import clock from "../../assets/icon/clock.svg";

export default function Contact() {
  return (
    <>
      <HeroPage />
      <section className="contact">
        <div className="container">
          <ul className="contact__list">
            <li className="contact__item item-contact">
              <div className="item-holder">
                <img
                  className="item-contact__icon"
                  src={location}
                  alt="location icon"
                  width="25"
                  height="25"
                />
              </div>
              <div className="item-info">
                <h3 className="item-contact__name">address</h3>
                <p className="item-contact__text">
                  г. Ташкент. Яшнабадский район, махалля «Олмос»
                </p>
              </div>
            </li>
            <li className="contact__item item-contact">
              <div className="item-holder">
                <img
                  className="item-contact__icon"
                  src={phone}
                  alt="location icon"
                  width="25"
                  height="25"
                />
              </div>
              <div className="item-info">
                <h3 className="item-contact__name">Телефон</h3>
                <a className="item-contact__link" href="#">
                  +99890000250
                </a>
              </div>
            </li>
            <li className="contact__item item-contact">
              <div className="item-holder">
                <img
                  className="item-contact__icon"
                  src={clock}
                  alt="location icon"
                  width="25"
                  height="25"
                />
              </div>
              <div className="item-info">
                <h3 className="item-contact__name">Время работы</h3>
                <p className="item-contact__text">Пн. - пт. 09:00 - 19:00</p>
                <p className="item-contact__text">Сб. - вс. 10.00 - 18.00</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
