import hmImg from "../image/pierre-jeanneret.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <div className="column-1">
        <h1>
          YOUR NEW HOME AWAITS.
          <br />
          TIME TO RELOCATE
        </h1>
        <Link to="/form">
          <button className="homeBtn">RELOCATE</button>
        </Link>
        
      </div>
      <div className="column-2">
        <img src={hmImg} alt="homeImage"></img>
      </div>
    </div>
  );
};
export default Home;
