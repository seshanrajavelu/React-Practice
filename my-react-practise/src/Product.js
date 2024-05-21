import React from "react";

export const Product = () => {
  return (
    <div>
      <h1>Apple Products</h1>
      <section className="product-cards">
        <div className="product-card">
          <img src="images/iphone.jpg" alt="iPhone" />
          <h3>iPhone 14</h3>
          <p>
            A powerful smartphone with a stunning display and innovative camera
            system.
          </p>
        </div>
        <div className="product-card">
          <img src="images/macbook.jpg" alt="Macbook" />
          <h3>MacBook Pro</h3>
          <p>
            The ultimate laptop for professionals with a powerful chip and sleek
            design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Product;
