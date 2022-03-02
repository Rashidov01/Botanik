
import Header from './components/header/header';
import Socials from './components/socials/socials';


//styles
import '../src/assets/sass/main.scss';
import '../src/App.scss'

//images
import img from '../src/assets/img/tree.jpeg'

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero-intro site-intro">
          <div className="site-intro__inner container">
            <ul className="site-intro__list">
              <li className="site-intro__item">
                  <a className="site-intro__link" href="">about</a>
              </li>
              <li className="site-intro__item">
                  <a className="site-intro__link" href="">contact us</a>
              </li>
            </ul>
            <ul className="hero-intro__list links">
              <li className="links__item icon phone-icon"><a className="site-intro__link">+998900000250</a></li>
              <li className="links__item icon location-icon">г. Ташкент</li>
            </ul>
          </div>
        </div>
        <Header />
        <div className="site-hero container">
          <div className="site-hero__wrapper">
            <h1 className="site-hero__title">BotanikUz</h1>
            <p className="site-hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaerat reprehenderit accusamus odio quia rerum quam eius quas officia nobis?
            </p>
            <Socials />
          </div>
          <div className="site-hero__slider slider">
            <img className="slider__img" src={img} alt="slider img" width="500" height="800"/>
          </div>
        </div>
      </div>
      <main className="main">
        <h1>main</h1>
      </main>
    </>
  );
}

export default App;
