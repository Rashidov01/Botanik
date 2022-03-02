import './header.scss'
import favorite from '../../assets/icon/favorite.svg'
import logo from '../../assets/icon/logo-add.png'
function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <img src={logo} alt="logo" width="120" height="120" />
        <form>
          <input className="header__input" type="search" placeholder="search" />
        </form>
        <a className="header__link" href="#">
          <img src={favorite} alt="favorite icon" width="30" height="30"/>
        </a>
      </div>
    </header>
  );
}

export default Header;