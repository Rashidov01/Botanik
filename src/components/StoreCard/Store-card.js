import React from "react";
import "./Store-card.scss";
import Img1 from "../../assets/img/img1.jpeg";
import Img4 from "../../assets/img/img6.jpeg";
import Img2 from "../../assets/img/blog-img.jpeg";

export default function StoreCard() {
  return (
    <div className="store-cards">
      <div className="store-card__box store-card card-list">
        <div className="store-card__head head-card">
          <img
            className="head-card__img"
            src={Img1}
            alt="card img"
            width="300"
            height="350"
          />
        </div>
        <div className="store-card__body body-card">
          <div className="body-card__head">
            <h4 className="body-card__title">Бересклет Японский</h4>
            <span className="body-card__price">65.00 $</span>
          </div>
          <p className="body-card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            perferendis illo autem architecto beatae voluptatibus a tempora
            provident doloremque consequatur libero aut eum accusamus quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
}
