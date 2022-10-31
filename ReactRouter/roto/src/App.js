import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
