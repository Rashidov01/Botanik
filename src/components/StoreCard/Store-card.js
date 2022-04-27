import React, { useState, useEffect } from "react";
import "./Store-card.scss";
import Img1 from "../../assets/img/img1.jpeg";

export default function StoreCard() {
  const [list, setList] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth <= 820;
        if (ismobile !== list) setList(ismobile);
      },
      false
    );
  }, [list]);
  return (
    <>
      <div className="store-item__header">
        <span className="store-item__text">Showing 1–9 of 24 results</span>
        <button
          onClick={() => {
            setList(false);
          }}
          className="form-store__btn btn-grid"
          type="button"
        ></button>
        <button
          onClick={() => {
            setList(true);
          }}
          className="form-store__btn btn-list"
          type="button"
        ></button>
      </div>
      <div className="store-item__main store-main">
        <div className="store-main__wrapper">
          <div className="store-cards">
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
            <div className={!list ? "store-card__box store-card" : "card-list"}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perferendis illo autem architecto beatae voluptatibus a
                  tempora provident doloremque consequatur libero aut eum
                  accusamus quos. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet, iusto! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Labore, ipsa? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Sit, dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
