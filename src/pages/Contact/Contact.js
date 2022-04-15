import React from "react";
import "./Contact.scss";
import location from "../../assets/icon/location-icon.svg";
import phone from "../../assets/icon/phone-icon.svg";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <ul className="contact__list">
          <li className="contact__item item-contact">
            <img className="item-contact__icon" src={location} alt="location icon" width="25" height="25"/>
            <h3 className="item-contact__name">address</h3>
            <p className="item-contact__text">г. Ташкент. Яшнабадский район, махалля «Олмос»</p>
          </li>
          <li className="contact__item item-contact">
            <img className="item-contact__icon" src={location} alt="location icon" width="25" height="25"/>
            <h3 className="item-contact__name">address</h3>
            <p className="item-contact__text">г. Ташкент. Яшнабадский район, махалля «Олмос»</p>
          </li>
          <li className="contact__item item-contact">
            <img className="item-contact__icon" src={location} alt="location icon" width="25" height="25"/>
            <h3 className="item-contact__name">address</h3>
            <p className="item-contact__text">г. Ташкент. Яшнабадский район, махалля «Олмос»</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
