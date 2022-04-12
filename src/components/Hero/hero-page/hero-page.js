import React from "react";
import { Link } from "react-router-dom";
import "./hero-page.scss";

export default function HeroPage() {
  return (
    <div className="hero-page">
      <div className="hero-page__content hero-content container">
        <h2 className="hero-content__title">Shop</h2>
        <ul className="hero-content__breadcrumb breadcrumb">
          <li className="breadcrumb__item">
            <Link className="breadcrumb__link" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb__item">
            <Link className="breadcrumb__link breadcrumb__link--active" to="/Store">
              Store
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
