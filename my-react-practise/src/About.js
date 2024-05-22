// About.js
import React from "react";
import {
  Link,
  // useRouteMatch,
} from "react-router-dom";

export const About = () => {
  // let match = useRouteMatch();

  return (
    <div>
      <h2>About</h2>
      <div class="btn">
        <button>
          <Link to="/product">Products</Link>
        </button>
      </div>
      {/* <ul>
        <li>{ <Link to={`${match.url}/product`}>Product</Link> }</li>
      </ul> */}
      {/* <Route path={`${match.path}/product`} component={Product} /> */}
    </div>
  );
};

export default About;
