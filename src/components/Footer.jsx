import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda.
          </p>
          <div className="footer__socials">
               <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
               <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
               <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaTwitter /></a>
               <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;