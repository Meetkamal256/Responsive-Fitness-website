import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
