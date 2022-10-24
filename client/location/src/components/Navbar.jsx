import { Link } from "react-router-dom";
// import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>RELOCATE</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/form">
          <button className="relocate">Relocate</button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
