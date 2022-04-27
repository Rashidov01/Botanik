import React from "react";
import "./Card.scss";
import Img1 from "../../assets/img/img1.jpeg";
import 'aos/dist/aos.css';

export default function Card() {
  return (
    <div data-aos="zoom-in-down" className="cardd">
      <div className="card__box box-cardd">
        <div className="box-card__head head-cardd">
          <img
            className="head-card__imgg"
            src={Img1}
            alt="card img"
            width="300"
            height="350"
          />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
    </div>
  );
}
