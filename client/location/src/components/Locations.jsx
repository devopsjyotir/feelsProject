import axios from "axios"
import { useEffect } from "react"
import { useState } from "react";


const Locations = ()=>{
const [locations, setLocations] = useState([])

useEffect(()=>{
    const getLocations = async ()=>{
        const response = await axios.get("/places")
        setLocations(response.data)
    }
    getLocations()
}, [])

    return(
        <div>
            <form>
                
            </form>
        </div>
    )
}

export default Locations