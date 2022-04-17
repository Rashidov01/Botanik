import React from "react";
import "./BlogOpen.scss";
import Img4 from "../../assets/img/blog-img.jpeg";

export default function BlogOpen() {
  return (
    <div className="blog-open">
      <div className="blog-open__head head-blog">
        <img className="blog-open__img" src={Img4} alt="blog opend img" width="600" height="500" />
      </div>
      <div className="blog-open__body body-blog">
        <div className="body-blog__head">
          <span className="body-blog__head-time"></span>
        </div>
      </div>
      {/* <section className="blog">
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
        </section> */}
    </div>
  );
}
