import React from "react";
import "./footer.css";
import logo from "../../images/undraw_cookie_love_yellow.svg";
import { socialLinks } from "./footerData";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item title-container">
        <h3>
          <span className="hashtag">#</span>freshBread
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          recusandae optio deleniti saepe rerum explicabo!
        </p>
        <h5>
          <span className="copyright">©2021</span> Bakery-v1
        </h5>
      </div>
      <div className="footer-item logo-container">
        <img src={logo} alt="logo" className="footer-logo" />
      </div>
      <div className="footer-item social-links">
        {socialLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <ul>
              <li key={id}>
                <a href={url} className="icon">
                  {icon}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </footer>
  );
};
