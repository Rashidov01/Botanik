import './socials.scss'

//icons
import telegram from "../../assets/icon/telegram.svg";
import instagram from "../../assets/icon/instagram.svg";

function Socials() {
  return (
    <ul className="socials-list">
      <li className="socials-list__item">
        <a className="socials-list__link">
           <img src={telegram} alt="telegram logo" width="30" height="30"/>
        </a>
      </li>
      <li className="socials-list__item">
        <a className="socials-list__link">
          <img src={instagram} alt="instagram logo" width="30" height="30"/>
        </a>
      </li>
    </ul>
  );
}

export default Socials;