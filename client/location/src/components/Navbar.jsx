import { Link } from "react-router-dom";
// import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>RELOCATE</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/relocate">
          <span className="relocate">Relocate</span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
