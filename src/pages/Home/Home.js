import React from "react";
import "./Home.scss";
// import CardSlider from "../CardSlider/CardSlider";
import Hero from "../../components/Hero//Hero";
import ship from "../../assets/icon/shipping.svg";
import call from "../../assets/icon/call.svg";
import auto from "../../assets/icon/auto.svg";
import Card from "../../components/Card/Card";
import Img4 from "../../assets/img/img6.jpeg";
import Img2 from "../../assets/img/blog-img.jpeg";
import { Footer, Header, CardSlider } from "../../components";

export default function Home() {
  const retingRespon = [
    {
      breakpoint: 1018,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
  return (
    <div className="home">
      <Header />
      <Hero />
      <div className="container">
        <section className="news">
          <div className="news__detail">
            <h2 className="news__detail-title">New arrival</h2>
            <p className="news__detail-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
              facilis.
            </p>
          </div>
          <CardSlider res={retingRespon} show={1}>
            <Card />
          </CardSlider>
        </section>
        <section className="reason">
          <div className="reason__inner">
            <ul className="reason__list">
              <li className="reason__item">
                <img className="reason__item-icon" src={ship} alt="shipping icon"/>
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Free shipping order</h3>
                  <span className="reason-desc__time">On orders over $100</span>
                </div>
              </li>
              <li className="reason__item">
                <img className="reason__item-icon" src={auto} alt="shipping icon" />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Return & exchange</h3>
                  <span className="reason-desc__time">Free return within 3 days</span>
                </div>
              </li>
              <li className="reason__item">
                <img className="reason__item-icon" src={ship} alt="shipping icon" />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Free shipping order</h3>
                  <span className="reason-desc__time">On orders over $100</span>
                </div>
              </li>
              <li className="reason__item">
                <img className="reason__item-icon" src={call} alt="call icon" />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Support 24 / 7</h3>
                  <span className="reason-desc__time">Customer support</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="best">
          <div className="best__detail">
            <h3 className="best__detail-title">Best seller</h3>
            <p className="best__detail-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus illum enim quidem, nihil possimus doloremque?</p>
          </div>
          <div className="best__box">
            <Card />
          </div>
        </section>
        <section className="blog">
          <div className="blog__detail">
            <h3 className="blog__detail-title">Latest News</h3>
            <p className="blog__detail-text">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="blog__card card-blog">
            <div className="card-blog__box">
              <div className="card-blog__box-head">
                <img className="card-blog__box-img" src={Img2} alt="blog img" width="300" height="350" />
                <div className="card-blog__box-date">
                  <span className="card-blog__box-day">10</span>
                  <span className="card-blog__box-month">April</span>
                </div>
              </div>
              <div className="card-blog__box-body">
                <h4 className="card-blog__box-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-blog__box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos voluptatibus adipisci obcaecati, a asperiores!</p>
              </div>
            </div>
            <div className="card-blog__box">
              <div className="card-blog__box-head">
                <img className="card-blog__box-img" src={Img2} alt="blog img" width="300" height="350" />
                <div className="card-blog__box-date">
                  <span className="card-blog__box-day">10</span>
                  <span className="card-blog__box-month">April</span>
                </div>
              </div>
              <div className="card-blog__box-body">
                <h4 className="card-blog__box-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-blog__box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos voluptatibus adipisci obcaecati, a asperiores!</p>
              </div>
            </div>
            <div className="card-blog__box">
              <div className="card-blog__box-head">
                <img className="card-blog__box-img" src={Img4} alt="blog img" width="300" height="350" />
                <div className="card-blog__box-date">
                  <span className="card-blog__box-day">10</span>
                  <span className="card-blog__box-month">April</span>
                </div>
              </div>
              <div className="card-blog__box-body">
                <h4 className="card-blog__box-title">Lorem ipsum dolor sit amet.</h4>
                <p className="card-blog__box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos voluptatibus adipisci obcaecati, a asperiores!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
