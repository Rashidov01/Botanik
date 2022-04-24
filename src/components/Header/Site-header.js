import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo.png";
import "./header.scss";

export default function SiteHeader() {
  return (
    <header className="header site-header">
      <nav className="header-nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/Store">
              Store
            </Link>
          </li>
          <li className="nav__item logo-item">
            <Link to="/">
              <img
                className="nav__logo"
                src={Logo}
                alt="site logo"
                width="60"
                height="60"
              />
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/About">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
