import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImg from "../image/zac-gudakov-faBWQt9i7dg-unsplash.jpg";
import NewYork from "./City";
import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";

const Form = (props) => {
  const navigate = useNavigate();
  // const [place, setPlace] = useState([]);

  // useEffect(() => {
  //   const getPlaces = async () => {
  //     try {
  //       let res = await axios.get("http://localhost:3001/api/places/");
  //       setPlace(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getPlaces();
  // }, []);

  const initialState = {
    name: "",
    email: "",
    number: "",
    interests: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    localStorage.setItem("interests", formState.interests);
    let res = await axios.post("http://localhost:3001/api/users", formState);
    console.log(res.data);
    setFormState(initialState);
    navigate("/places");
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
    console.log(formState);
  };

  // const handleClick = (event) => {
  //   navigate("/places");
  // }

  return (
    <section>
      <div className="inputForm">
        <div className="col-1">
          <h2>Find A Home</h2>
          <span>HAve Fun!</span>
          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="full name"
              id="name"
              onChange={handleChange}
              value={formState.name}
            />
            <input
              type="text"
              placeholder="email"
              id="email"
              onChange={handleChange}
              value={formState.email}
            />

            <input
              type="text"
              placeholder="number"
              id="number"
              onChange={handleChange}
              value={formState.number}
            />
            <div className="options" id="interests">
              <h4>Interest</h4>
              <select
                className="individual-btn "
                id="interests"
                onChange={handleChange}
                value={formState.interests}
              >
                <option value="Soccer">Soccer</option>
                <option value="Running">Running</option>
                <option value="Shopping">Shopping</option>
                <option value="Music">Music</option>
                <option value="Cross-fit">Cross-fit</option>
                <option value="Broadway">Broadway</option>
                <option value="Parks">Parks</option>
                <option value="Outdoor & Nature">Outdoor & Nature</option>
              </select>
            </div>
            <button className="registerBtn">Submit</button>
          </form>
        </div>

        <div className="col-2">
          <img src={bgImg} alt="neighborhood" />
        </div>
        <Routes>
          <Route path="/places" element={<NewYork />} />
        </Routes>
      </div>
    </section>
  );
};

export default Form;
