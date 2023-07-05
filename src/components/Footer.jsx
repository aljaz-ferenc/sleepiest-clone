import "./Footer.scss";
import logo from "../assets/logo.webp";
import logoText from "../assets/logo-text.svg";
import { SocialIcon } from 'react-social-icons';

const iconStyles ={
  height: 25, width: 25
}

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__socials">
          <div className="footer__socials--logo">
            <img src={logo} alt="" />
            <img src={logoText} alt="" />
          </div>
          <p>Helping the world to sleep better, one person at a time.</p>
          <div className="social-icons">
            <SocialIcon network="facebook" bgColor="#9ca3af" style={iconStyles}/>
            <SocialIcon network="instagram" bgColor="#9ca3af" style={iconStyles}/>
            <SocialIcon network="twitter" bgColor="#9ca3af" style={iconStyles}/>
            <SocialIcon network="tiktok" bgColor="#9ca3af" style={iconStyles}/>
          </div>
        </div>
        <div className="footer__links">
          <h4>COMPANY</h4>
          <p>About</p>
          <p>World Data</p>
          <p>Advertise</p>
          <p>Blog</p>
        </div>
        <div className="footer__links">
          <h4>HELP CENTER</h4>
          <p>FAQ</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__links">
          <h4>LEGAL</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer__links">
          <h4>TERMS & CONDITIONS</h4>
          <p>iOS</p>
          <p>Android</p>
          <p>Web</p>
        </div>
        <div className="footer__menu"></div>
      </footer>
      <div className="footer__copyright">© Sleepiest 2023. All Rights Reserved.</div>
    </div>
  );
}
