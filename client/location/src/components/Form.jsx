import { useState } from "react";
import axios from "axios";

import bgImg from "../image/zac-gudakov-faBWQt9i7dg-unsplash.jpg";
const Form = () => {
  const initialState = {
    name: "",
    email: "",
    number: "",
  };
  const [formState, setFormState] = useState(initialState);

  const [interestsState, setInterestsState] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    let res = await axios.post(
      "http://localhost:3001/api/users",
      interestsState
    );
    console.log(res.data);
    setFormState(initialState);
    // setInterestsState([]);
  };

  // const [clicked, SetClicked] = useState(false);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleClick = (event) => {
    event.currentTarget.style.border = "1px solid black";

    // SetClicked(false);
    setInterestsState([...interestsState, event.target.value]);
  };

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
            <input type="text" placeholder="confirm email" />
            <input
              type="text"
              placeholder="number"
              id="number"
              onChange={handleChange}
              value={formState.number}
            />
            <div className="options" id="interests">
              <h4>Interests</h4>
              <button
                type="button"
                className="individual-btn"
                value="running"
                onClick={handleClick}
              >
                running
              </button>
              <button
                type="button"
                className="individual-btn"
                value="cross-fit"
                onClick={handleClick}
              >
                cross-fit
              </button>
              <button
                type="button"
                className="individual-btn"
                value="soccer"
                id="interests"
                onClick={handleClick}
              >
                soccer
              </button>
              <button
                type="button"
                className="individual-btn"
                value="music"
                onClick={handleClick}
              >
                music
              </button>
            </div>
            <button className="registerBtn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="col-2">
          <img src={bgImg} alt="neighborhood" />
        </div>
      </div>
    </section>
  );
};

export default Form;
