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

const [formState, setFormState] = useState({
    name:'',
    image: '',
    description: '',
    attributes:[]
})

const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
}

const updateLocation = async (event)=> {
event.preventDefault()
const response = await axios.put(`http://localhost:3001/api/places/update/${id}`, formState)
setLocations([...locations, response.data])
// setFormState({})
}

    return(
        <div>
            {locations.map((city)=>(
                <form onSubmit={updateLocation} >
                     <label htmlFor="name">Name: </label>
                <input id="name" value={formState.name} onChange={handleChange} />
                <label htmlFor="image">Image: </label>
                <input id="image" value={formState.image} onChange={handleChange} />
                <label htmlFor="description">Description: </label>
                <input
                  id="description"
                  value={formState.description}
                  onChange={handleChange}
                />
                <label htmlFor="attributes">Link: </label>
                <input id="attributes" value={formState.attributes} onChange={handleChange} />
               
               
                <button type="submit">update Snail</button>
              </form>
            ))}
        </div>
    )
}

export default Locations