// About.js
import React from "react";
import {
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Product from "./Product";

export const About = () => {
  // let match = useRouteMatch();

  return (
    <div>
      <h2>About</h2>

   
        <div class="btn">
          <Link to="/product">Products</Link>
        </div>

        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
        
      <ul>
        <li>{/* <Link to={`${match.url}/product`}>Product</Link> */}</li>
      </ul>

      {/* <Route path={`${match.path}/product`} component={Product} /> */}
    </div>
  );
};

export default About;
