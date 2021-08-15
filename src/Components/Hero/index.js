import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* <img src={imgBg} className="hero" alt="Bread pic" /> */}
        <article className="hero-items">
          <h1 className="hero-h1">Awesome loaves, baked with love</h1>
          <h2 className="hero-p">Ready in minutes</h2>
          <button className="hero-btn">View Products</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
