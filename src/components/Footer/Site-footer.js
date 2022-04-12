import React from 'react'
import "./Footer.scss"
import location from "../../assets/icon/location-light.svg"
import phone from "../../assets/icon/phone-light.svg"
import logo from "../../assets/icon/logo.png"
import Telegram from "../../assets/icon/telegram-light.svg";
import Instagram from "../../assets/icon/facebook-light.svg";
import Facebook from "../../assets/icon/instagram-light.svg";

export default function Footer() {
  return (
    <footer className="footer site-footer">
      <div className="footer__wrapper container">
        <div className="footer__holder">
          <img className="footer__logo" src={logo} alt="site logo" width="100" height="100" />
          <div className="footer__socials-wrapper">
            <h3 className="footer__socials-title">Follow us: </h3>
            <ul className="socials">
              <li className="socials__item">
                <a className="socials__link" href="#"><img className="footer-socials__icon" src={Telegram} alt="telegram logo" width="30" height="30" /></a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#"><img className="footer-socials__icon" src={Instagram} alt="instagram logo" width="30" height="30"/></a>
              </li>
              <li className="socials__item">
                <a className="socials__link" href="#"><img className="footer-socials__icon" src={Facebook} alt="facebook logo" width="30" height="30"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info info-footer">
          <ul className="info-footer__list">
            <li className="info-footer__item">
              <img className="info-footer__item-icon" src={location} alt="location icon" width="25" height="25"/>
              <h3 className="info-footer__item-title">Lorem ipsum dolor sit amet consectetur.</h3>
            </li>
            <li className="info-footer__item">
              <img className="info-footer__item-icon" src={phone} alt="location icon" width="25" height="25"/>
              <a className="info-footer__item-link" href="tel:+998900000250">+99890000250</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
