import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo-add.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
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
          <li className="nav__item">
            <Link to="/">
              <img
                className="nav__img"
                src={Logo}
                alt="site logo"
                width="80"
                height="80"
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
          {/* <li className="nav__item">
            <Link className="nav__link" to="/CardOpen">Card opened</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/BlogOpen">Blog opened</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
