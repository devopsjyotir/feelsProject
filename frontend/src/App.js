// import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import Form from "./components/Form";
import City from "./components/City";
import Locations from "./components/Locations";
import AddLocation from "./components/New.jsx";


const App = () => {
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<City />} />
          <Route path="/form/*" element={<Form />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/new" element={<AddLocation />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
