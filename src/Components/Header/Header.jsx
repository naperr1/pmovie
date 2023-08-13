import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import logo from "../../image/tmovie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "Tv Series",
    path: "/tv",
  },
];

const Header = () => {
  const pathName = useLocation();
  const headerRef = useRef(null);
  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("activeNav");
  };

  const active = headerNav.findIndex((e) => e.path === pathName.pathname);

  useEffect(() => {
    const shinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shinkHeader);
  }, []);

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="header_logo">
          <img src={logo} alt="logo" />
          <Link to="/">PMovies</Link>
        </div>

        <ul ref={navRef} className="header_nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
        <i className="fas fa-bars" onClick={showNavBar}></i>
      </header>
    </>
  );
};

export default Header;
