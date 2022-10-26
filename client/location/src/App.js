// import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Form from "./components/Form";
import NewYork from "./components/City";
// import { useEffect, useState } from "react";
// import axios from "axios";

const App = () => {
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<NewYork />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
