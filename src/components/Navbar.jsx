import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const closeNavbar = () => {
    setIsNavShowing(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <div className="logo__container">
            <span className="logo__text">FitHub</span>
          </div>
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={closeNavbar}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
