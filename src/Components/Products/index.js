import React from "react";
import { productData } from "./productData";
import "./product.css";

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="products-heading">Browse Our Products</h2>
      <div className="products-wrapper">
        {productData.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="img-container">
                <img src={product.img} alt="name" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* fix link to products page */}
      <button className="products-link">View more</button>
    </div>
  );
};

export default Products;
