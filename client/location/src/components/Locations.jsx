import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";


const Locations = ()=>{
const [locations, setLocations] = useState([])

useEffect(()=>{
    const getLocations = async ()=>{
        const response = await axios.get("http://localhost:3001/api/places")
        console.log(response.data.places)
        setLocations(response.data.places)
    }
    getLocations()
}, [])

const updateLocation = (id)=> {
const newdetails = prompt("Enter New Location")
}

    return(
        <div>
            {locations.map((city)=>(
                <div>
                    <p>{city.name}</p>
                    <button onClick={()=>{
                        updateLocation(city._id)
                    }}>Update</button>
                </div>
            ))}
        </div>
    )
}

export default Locations