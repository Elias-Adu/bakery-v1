import React from "react";
import aboutImg from "../../images/bread-basket.png";
import "./about.css";

export const About = () => {
  return (
    <section className="about-container">
      <article className="about-info">
        <h2>Learn about the bakery</h2>
        {/* <div className="underline"></div> */}
        <p className="about-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          expedita minima nulla, laborum eius sapiente debitis fugiat ratione
          facilis, laboriosam eligendi ipsum, neque sint magni asperiores nihil
          voluptatum at nam. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quibusdam dolorum a quas labore iure reiciendis enim dicta illo
          recusandae eveniet!
        </p>
        <button className="about-btn">learn more</button>
      </article>
      <div className="about-image-center">
        <img src={aboutImg} alt="bread-basket" className="about-image" />
      </div>
    </section>
  );
};
