import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import newImg from "../image/vu-anh-TiVPTYCG_3E-unsplash.jpg";

import { Routes, Route } from "react-router-dom";
import Locations from "./Locations";

const New = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    image: "",
    description: "",
    attributes: [],
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);


    let res = await axios.post("http://localhost:3001/api/places", formState);
    console.log(res.data);
    setFormState(initialState);
    navigate("/locations");
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  return (
    <section>
      <div className="inputForm">
        <div className="col-1">
          <h2>Add A Location</h2>
          <span>
            Let's do this <span className="nameStyle">{formState.name}!</span>
          </span>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              id="name"
              onChange={handleChange}
              value={formState.name}
            />
            <input
              type="text"
              placeholder="image"
              id="image"
              onChange={handleChange}
              value={formState.image}
            />

            <input
              type="text"
              placeholder="description"
              id="description"
              onChange={handleChange}
              value={formState.description}
            />
            <input
              type="text"
              placeholder="attributes"
              id="attributes"
              onChange={handleChange}
              value={formState.attributes}
            />
          
            <button className="registerBtn">Submit</button>
          </form>
        </div>

        <div className="col-2">
          <img src={newImg} alt="neighborhood" />
        </div>
        <Routes>
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </section>
  );
};

export default New;