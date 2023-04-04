// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import { Routes, Route } from "react-router-dom";
import {Home} from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
import Skill from "./components/Skill";
import Project from "./components/Project";
import Activity from "./components/Activity";
// import { useState } from "react";

function App() {
  document.title="Ayush Kaushik"
 
  return (
    <>
      {" "}
        <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project"element={<Project/>}/>
      </Routes> */}
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Activity/>
      <Contact/>
    </>
  );
}

export default App;
