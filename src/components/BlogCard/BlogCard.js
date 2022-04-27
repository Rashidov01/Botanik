import React from "react";
import Img2 from "../../assets/img/blog-img.jpeg";

export default function BlogCard() {
  return (
    <div>
      <div data-aos="zoom-in-down" className="blog__card card-blog">
        <div className="card-blog__box">
          <div className="card-blog__box-head">
            <img
              className="card-blog__box-img"
              src={Img2}
              alt="blog img"
              width="300"
              height="350"
            />
            <div className="card-blog__box-date">
              <span className="card-blog__box-day">10</span>
              <span className="card-blog__box-month">April</span>
            </div>
          </div>
          <div className="card-blog__box-body">
            <h4 className="card-blog__box-title">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="card-blog__box-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              eos voluptatibus adipisci obcaecati, a asperiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
