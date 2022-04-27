import React from "react";
import "./Home.scss";
import Hero from "../../components/Hero//Hero";
import ship from "../../assets/icon/shipping.svg";
import call from "../../assets/icon/call.svg";
import auto from "../../assets/icon/auto.svg";
import Card from "../../components/Card/Card";
import 'aos/dist/aos.css';
import Aos from 'aos';

import {
  Footer,
  Header,
  CardSlider,
  BlogSlider,
  BlogCard,
} from "../../components";

export default function Home() {
  Aos.init({
    duration: 1100,
    once: true,
  });
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
          <CardSlider>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardSlider>
        </section>
        <section  className="reason">
          <div className="reason__inner">
            <ul className="reason__list">
              <li data-aos="zoom-in-down" className="reason__item">
                <img
                  className="reason__item-icon"
                  src={ship}
                  alt="shipping icon"
                />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Free shipping order</h3>
                  <span className="reason-desc__time">On orders over $100</span>
                </div>
              </li>
              <li data-aos="zoom-in-down" className="reason__item">
                <img
                  className="reason__item-icon"
                  src={auto}
                  alt="shipping icon"
                />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Return & exchange</h3>
                  <span className="reason-desc__time">
                    Free return within 3 days
                  </span>
                </div>
              </li>
              <li data-aos="zoom-in-down" className="reason__item">
                <img
                  className="reason__item-icon"
                  src={ship}
                  alt="shipping icon"
                />
                <div className="reason__item-desc reason-desc">
                  <h3 className="reason-desc__title">Free shipping order</h3>
                  <span className="reason-desc__time">On orders over $100</span>
                </div>
              </li>
              <li data-aos="zoom-in-down" className="reason__item">
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
            <p className="best__detail-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              illum enim quidem, nihil possimus doloremque?
            </p>
          </div>
          <div className="best__box">
            <CardSlider>
              <Card />
              <Card />
              <Card />
              <Card />
            </CardSlider>
          </div>
        </section>

        <section className="blog">
          <div className="blog__detail">
            <h3 className="blog__detail-title">Latest News</h3>
            <p className="blog__detail-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="blog__card card-blog">
            <BlogSlider>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </BlogSlider>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
