import React from "react";
import "./Store.scss";
import HeroPage from "../../components/Hero/hero-page/hero-page";
import { StoreCard } from "../../components";

export default function Store() {
  return (
    <div>
      <HeroPage />
      <section className="store">
        <div className="store__wrapper container">
          <div className="store-filter">
            <form className="store-filter__form filter-form">
              <input
                className="filter-form__input"
                type="search"
                placeholder="Search..."
              />
              <button className="filter-form__btn" type="submit"></button>
            </form>
            <div className="store-filter__category filter-category">
              <div className="filter-category__head">
                <h3 className="filter-category__head-title">
                  Product categories
                </h3>
              </div>
              <ul className="filter-category__list">
                <li className="filter-category__list-item category-item">
                  <a className="category-item__link" href="#">
                    Dried
                  </a>
                  <span className="category-item__amount">7</span>
                </li>
                <li className="filter-category__list-item category-item">
                  <a className="category-item__link" href="#">
                    Dried
                  </a>
                  <span className="category-item__amount">7</span>
                </li>
                <li className="filter-category__list-item category-item">
                  <a className="category-item__link" href="#">
                    Dried
                  </a>
                  <span className="category-item__amount">7</span>
                </li>
                <li className="filter-category__list-item category-item">
                  <a className="category-item__link" href="#">
                    Dried
                  </a>
                  <span className="category-item__amount">7</span>
                </li>
              </ul>
            </div>
            <div className="store-filter__tags filter-tags">
              <div className="filter-tags__head">
                <h3 className="filter-tags__head-title">Poduct tags</h3>
              </div>
              <ul className="filter-tags__list">
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">plant</button>
                </li>
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">floor</button>
                </li>
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">office</button>
                </li>
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">cactus</button>
                </li>
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">house plant</button>
                </li>
                <li className="filter-tags__list-item tags-item">
                  <button className="tags-item__btn">plant</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="store-item">
            <StoreCard />
          </div>
        </div>
      </section>
    </div>
  );
}
