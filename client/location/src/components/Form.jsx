import { useState } from "react";

const newForm = () => {
  const initialState = {
    name: "",
    email: "",
    number: "",
    interests: [""],
  };
};

import bgImg from "../image/zac-gudakov-faBWQt9i7dg-unsplash.jpg";
const Form = () => {
  return (
    <section>
      <div className="inputForm">
        <div className="col-1">
          <h2>Find A Home</h2>
          <span>HAve Fun!</span>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="confirm email" />
            <input type="text" placeholder="number" />
            <div className="options">
              <h4>Interests</h4>
              <button type="button" className="individual-btn" value="running">
                running
              </button>
              <button
                type="button"
                className="individual-btn"
                value="cross-fit"
              >
                cross-fit
              </button>
              <button type="button" className="individual-btn" value="soccer">
                soccer
              </button>
              <button type="button" className="individual-btn" value="music">
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
