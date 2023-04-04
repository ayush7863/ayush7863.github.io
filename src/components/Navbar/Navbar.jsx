import React, { useState } from "react";
import { Link } from "react-scroll";
// import {useNavigate} from "react-router-dom"
// import {HashLink as Link} from "react-router-hash-link"
import "./Navbar.css";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const navigate=useNavigate()
  // const handlelogo=()=>{
    


  // }
   const handleClick = () => {    
    window.open(
      "https://drive.google.com/file/d/1Er89n3cZ8jlpJHPb5T9d3xDLArCvhHKa/view?usp=share_link",
      "_blank"
    );
    const link = document.createElement("a");
    link.download = "Ayush_Kaushik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
  };
  return (
    <nav id="nav-menu">
      <h3 className="logo">A<span className="last-name">KAUSHIK</span></h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
      onClick={()=>setIsMobile(false)}
      
      >
        <Link to="home" className="nav-link home" spy={true} smooth={true} offset={-60} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" className="nav-link about" spy={true} smooth={true} offset={-50} duration={500}>
          <li>About</li>
        </Link>
        <Link  to="skills" className="nav-link skills" spy={true} smooth={true} offset={-100} duration={500}>
          <li>Skills</li>
        </Link>
        <Link  to="projects" className="nav-link projects" spy={true} smooth={true} offset={-70} duration={900}>
          <li>Project</li>
        </Link>
        <Link to="contact" className="nav-link contact" spy={true} smooth={true} offset={50} duration={500}>
          <li>Contact</li>
        </Link>
        <button id="resume-button-1">
          <a
             
              href="Ayush_Kaushik_Resume.pdf"
              target="_blank"
              download={true}
              rel="noreferrer"
              onClick={handleClick}
              id="resume-link-1"
              className="nav-link resume"
            >
              Resume 
            </a>
            
        </button>
        
      </ul>
      <button className="mobile-menu-icon"
      onClick={()=>setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
