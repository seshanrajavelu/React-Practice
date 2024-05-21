import React from "react";
import { Link } from "react-router-dom";
export default function Contact() {

  return (
    <div>
      <h2>Contact</h2>
      <button>
        <Link to="/">Go to Home</Link>
      </button>

    </div>
  );
}
export { Contact };
