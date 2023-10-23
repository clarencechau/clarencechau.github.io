import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [navbarVisible, setNavbarVisibile] = useState(false);

  const showNavbar = () => {
    if (window.innerWidth <= 960) {
      setNavbarVisibile(false);
    } else {
      setNavbarVisibile(true);
    }
  };

  useEffect(() => {
    showNavbar();
  }, []);

  window.addEventListener("resize", showNavbar);

  return (
    <div className="navbar">
      {navbarVisible && (
        <ul
          className={
            props.showNavbar ? "navbar-container active" : "navbar-container"
          }
        >
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links">
              EXPLORE
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
