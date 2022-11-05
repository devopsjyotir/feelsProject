import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";



const Locations = ()=>{
const [place, setPlace] = useState([])


useEffect(()=>{
    const getLocations = async ()=>{
        const response = await axios.get("http://localhost:3001/api/places")
        console.log(response.data.places)
        setPlace(response.data.places)
    }
    getLocations()
}, [])

const updateLocation = (id)=> {
    const newName = prompt("Enter New Name")
    axios.put('http://localhost:3001/api/places/update/', {newName: newName, id: id}).then(()=> {
        setPlace(place.map((city)=>{
            return city._id === id ? {_id: id, name: newName, image: city.image, description:city.description} : city
        }))
    })
    }

    return(
        <div >
       
          <h1 className="cityHeading">Woohoo You Just Added a Location!</h1>
        
          <div className="card-section">
        {place.map((city) => (
                 
          <div key={city._id} className="card">
             <img
                  src={city.image}
                  alt="city"
                  className="card-image"
                  height={200}
                  width={200}
                />
           <div className="card-body">   <h2 className="city-name">{city.name}</h2><p className="city-info">{city.description}</p>      <button className="card-btn" onClick={()=>{
                        updateLocation(city._id)
                    }}>Update</button>
              <button className="card-btn" onClick={async () => {
     
     try {
      const res = await axios.delete(
        `http://localhost:3001/api/places/id/${(city._id)}`
      )
      
      console.log(res)
    
    } catch (error) {
      console.log(error)
    }}
            
          }key={city?._id}>Remove</button></div>
            
        
             
                
            
           
            </div>
           
           
        ))}
          </div>
     </div>
       
    )
}

export default Locations