import React from "react";
import "./featuredProducts.css";
import featuredProductData from "./featuredData";
const FeaturedProducts = () => {
  return (
    <section className="featured-main-container">
      <h2 className="featured-header-title">Weekly Promotions</h2>
      <div className="featured-subcontainer">
        {featuredProductData.map((item) => {
          const { img, name, desc } = item;
          return (
            <div className="featured-product">
              <div className="text-items">
                <h3 className="featured-name">{name}</h3>
                <p className="featured-text">{desc}</p>
              </div>
              <img className="featured-img" src={img} alt={name} />
            </div>
          );
        })}
      </div>
      {/* <button className="products-link">View Promo</button> */}
    </section>
  );
};

export default FeaturedProducts;
