import React from "react";
import "./Project.css";
import img1 from "./projectImages/Screenshot (40).png";
import img2 from "./projectImages/Screenshot (41).png";
import img3 from "./projectImages/Screenshot (43).png";
import img4 from "./projectImages/Screenshot (44).png";
const Project = () => {
  // console.log(img1)
  return (
    <div>
      <div className="project-container" id="projects">
        <h1>Project</h1>
        <div>
          <div className="project-card">
            <div>
              <img src={img1} alt="headphone" />
              <h3 className="project-title">HeadPhoneZone.com</h3>
              <hr />
              <p className="project-description">
                HeadPhone Zone is a E-Commerce Website. Here We find electronics
                gadgets Like Earphone,Earbuds,HeadPhones etc.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:<span id="tech-stack">HTML CSS AND JAVASCRIPT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                <a href="https://github.com/ayush7863/quick-gun-3161">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://jocular-banoffee-871048.netlify.app/">
                  <i class="fa-sharp fa-solid fa-link"></i>
                  {"   "}LIVE
                </a>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div>
              <img src={img2} alt="headphone" />
              <h3 className="project-title">Expedia.com</h3>
              <hr />
              <p className="project-description">
                Expedia is an e-commerce website. Here you book flight tickets
                and a hotel room.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:<span id="tech-stack">HTML CSS AND JAVASCRIPT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                {" "}
                <a href="https://github.com/ayush7863/busy-cough-2191">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}
                  GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://cute-cat-323b45.netlify.app/">
                  <i class="fa-sharp fa-solid fa-link"></i>
                  {"   "}LIVE
                </a>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div>
              {" "}
              <img src={img3} alt="headphone" />
              <h3 className="project-title">LensKart.com</h3>
              <hr />
              <p className="project-description">
                Lenskart is a leading e-commerce company that maintains an
                online optical store packed with both classic and trendy
                eyeglasses.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:
                <span id="tech-stack">HTML CSS AND JAVASCRIPT,REACT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                {" "}
                <a href="https://github.com/ayush7863/likeable-shade-727">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}
                  GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://eyekart.vercel.app//">
                  <i class="fa-sharp fa-solid fa-link"></i>
                  {"   "}LIVE
                </a>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div>
              {" "}
              <img src={img4} alt="headphone" />
              <h3 className="project-title">Fitness Blender.com</h3>
              <hr />
              <p className="project-description">
                Fitness Blender provides hundreds of workouts, healthy recipes,
                relaxing meditations, and expert articles, for a whole body and
                mind approach to feeling great.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:<span id="tech-stack">HTML CSS AND JAVASCRIPT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                {" "}
                <a href="https://github.com/ayush7863/festive-wool-1013/tree/main">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}
                  GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://page-dusky.vercel.app//">
                  <i class="fa-sharp fa-solid fa-link"></i>
                  {"   "}LIVE
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
