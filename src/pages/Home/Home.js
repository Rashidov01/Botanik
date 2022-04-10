import React from 'react'
import "./Home.scss"
import Hero from '../../components/Hero/Hero'
import ship from "../../assets/icon/shipping.svg";
import call from "../../assets/icon/call.svg";
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="news">
        <div className="container">
          <div className="news__detail">
            <h3 className="news__detail-title">New arrival</h3>
            <p className="news__detail-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, facilis.</p>
          </div>
          <Card />
        </div>
      </section>
      <section className="reason">
        <div className="reason__inner container">
          <ul className="reason__list">
            <li className="reason__item">
              <img className="reason__item-icon" src={ship} alt="shipping icon"/>
              <div className="reason__item-desc reason-desc">
                <h3 className="reason-desc__title">Free shipping order</h3>
                <span className="reason-desc__time">On orders over $100</span>
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

    </div>
  )
}
