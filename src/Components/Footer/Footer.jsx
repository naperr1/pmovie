import React from "react";
import { Link } from "react-router-dom";

import banner from "../../image/footer-bg.jpg";
import logo from "../../image/tmovie.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${banner})` }}>
      <div className="footer_logo">
        <img src={logo} alt="" />
        <Link to="/">PMovies</Link>
      </div>

      <div className="footer_content">
        <div className="footer_content-menu">
          <Link to="/">Home</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Premium</Link>
          <Link to="/">Pravacy policy</Link>
        </div>
        <div className="footer_content-menu">
          <Link to="/">Live</Link>
          <Link to="/">FAQ Us</Link>
          <Link to="/">Premium</Link>
          <Link to="/">Pravacy policy</Link>
        </div>
        <div className="footer_content-menu">
          <Link to="/">You must watch</Link>
          <Link to="/">Recent release</Link>
          <Link to="/">Top IMDB</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
