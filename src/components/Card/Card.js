import React from 'react';
import "./Card.scss";
import Img1 from "../../assets/img/img1.jpeg";

export default function Card() {
  return (
    <div className="card">
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
    </div>
  )
}
