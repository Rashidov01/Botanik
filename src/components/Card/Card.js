import React from 'react';
import "./Card.scss";
import Img1 from "../../assets/img/img1.jpeg";
import Img4 from "../../assets/img/img6.jpeg";
import Img2 from "../../assets/img/blog-img.jpeg";

export default function Card() {
  return (
    <div className="card">
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" width="300" height="350" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img1} alt="card img" width="300" height="350" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img4} alt="card img" width="300" height="350" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
      <div className="card__box box-card">
        <div className="box-card__head head-card">
          <img className="head-card__img" src={Img2} alt="card img" width="300" height="350" />
        </div>
        <div className="box-card__body body-card">
          <h4 className="body-card__title">Бересклет Японский</h4>
          <span className="body-card__price">65.00 $</span>
        </div>
      </div>
    </div>
  )
}
