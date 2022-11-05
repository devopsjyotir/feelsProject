import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>RELOCATE</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>

        <Link to="/form">
          <button className="relocate">Relocate</button>
        </Link>
        <Link to="/Locations" className="linky">
     Locations
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
