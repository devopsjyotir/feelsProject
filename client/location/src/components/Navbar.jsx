import { Link } from "react-router-dom";
// import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>RELOCATE</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="/contact" className="linky">
          Contact
        </Link>
        <Link to="/form">
          <button className="relocate">Relocate</button>
        </Link>
        <Link to="/places">
          <button className="relocate">Places</button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
