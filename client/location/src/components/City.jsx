// import axios from "axios";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const NewYork = () => {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("interests") || "Soccer";
    const getPlace = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/places/interests/${data}`
      );

      console.log(res.data.places, data);
      setPlace(res.data.places);
    };
    getPlace();
  }, []);

  return (
    <div>
      <h1>Places</h1>
      {place.map((city) => (
        <div key={city._id}>
          <div className="cityContainer">
            <div className="city-col2">
              <h2 className="cityName">{city.name}</h2>
              <p className="cityDescription">{city.description}</p>
            </div>
            <div className="city-col1">
              <img
                src={city.image}
                alt="city"
                className="cityImage"
                height={250}
                width={450}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NewYork;
