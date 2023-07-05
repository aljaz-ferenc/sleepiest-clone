import "./Navbar.scss";
import logo from "../assets/logo.webp";
import logoText from "../assets/logo-text.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__left">
          <li className="navbar__left--logo">
            <img src={logo} alt="" />
          </li>
          <li className="navbar__left--logo-text">
            <img src={logoText} alt="" />
          </li>
        </ul>
        <ul className="navbar__center">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>World</li>
        </ul>
        <ul className="navbar__right">
          <li className="navbar__right--login">Login</li>
          <li className="navbar__right--try">Try For Free</li>
        </ul>
      </nav>
    </header>
  );
}
