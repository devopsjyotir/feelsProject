import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";


const Locations = ()=>{
const [locations, setLocations] = useState([])
let {id} = useParams()

useEffect(()=>{
    const getLocations = async ()=>{
        const response = await axios.get("http://localhost:3001/api/places")
        console.log(response.data.places)
        setLocations(response.data.places)
    }
    getLocations()
}, [])

const updateLocation = (id)=> {
const newName = prompt("Enter New Name")
axios.put('http://localhost:3001/api/places/update/', {newName: newName, id: id}).then(()=> {
    setLocations(locations.map((city)=>{
        return city._id == id ? {_id: id, name: newName} : city
    }))
})
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