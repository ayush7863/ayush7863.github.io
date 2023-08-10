import React from "react";
import "./Home.css";
import img1 from "./images/ayush.jpg";
// import Typical from "react-typical";<i class="fa fa-download"></i>
import Typewritter from "typewriter-effect";
// import "./About.css";

export const Home = () => {
  const handleClick = () => {
    // window.open('https://drive.google.com/file/d/1jFPUwmPU2j21g5YDqNi74oJauCHcLfIE/view?usp=sharing', '_blank');
    window.open(
      "https://drive.google.com/file/d/1Er89n3cZ8jlpJHPb5T9d3xDLArCvhHKa/view?usp=share_link",
      "_blank"
    );
    const link = document.createElement("a");
    link.download = "Ayush-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div>
      <div className="container" id="home">
        <div>
          {" "}
          <img src={img1} alt="..." className="home-img" />
        </div>
        <div id="intro-section">
          <h1>
            <span id="name-1">Hi👋, I'am</span>{" "}
            <span id="user-detail-name">Ayush Kaushik</span>
          </h1>
          <h1 className="type-writter">
            <Typewritter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: [
                  "Full Stack Web Developer",
                  "MERN Stack Developer",
                  "React Developer",
                ],
              }}
            />
          </h1>
          <p id="user-detail-intro">
            Full Stack Developer with a passion for development and excited to
            be at the development phase of my career as a web developer.
            <br />
            Proficient in Frontend technology as well as in backend technology.
          </p>
          <button className="resume-btn" id="resume-button-2">
            <a
             
              href="Ayush-Kaushik-Resume.pdf"
              target="_blank"
              download={true}
              rel="noreferrer"
              onClick={handleClick}
              id="resume-link-2"
            >
              Resume
            </a>           
          </button>
        </div>
      </div>
    </div>
  );
};


