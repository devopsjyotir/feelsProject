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

      setPlace(res.data.places);
    };
    getPlace();
   
  }, [setPlace]);
  

  const updateLocation = (id)=> {
    const newName = prompt("Enter New Name")
    axios.put('http://localhost:3001/api/places/update/', {newName: newName, id: id}).then(()=> {
        setPlace(place.map((city)=>{
            return city._id === id ? {_id: id, name: newName, image: city.image, description:city.description} : city
        }))
    })
    }



 
  return (
    <div>
      <div className="CityPageContent">
        <div className="cityTextHeadContent">
          <h1 className="cityHeading">Results</h1>
        </div>

        {place.map((city) => (
          <div key={city._id}>
            <div className="cityContainer">
              <div className="city-col2">
              <button onClick={()=>{
                        updateLocation(city._id)
                    }}>Update</button>
              <button onClick={async () => {
     
     try {
      const res = await axios.delete(
        `http://localhost:3001/api/places/id/${(city._id)}`
      )
      
      console.log(res)
    
    } catch (error) {
      console.log(error)
    }}
            
          }key={city?._id}>Remove</button>
                <h2 className="cityName">{city.name}</h2>
                <p className="cityDescription">{city.description}</p>
              </div>
            
              <div className="city-col1">
                <img
                  src={city.image}
                  alt="city"
                  className="cityImage"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewYork;
