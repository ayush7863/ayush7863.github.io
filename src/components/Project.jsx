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
              <img
                src="https://user-images.githubusercontent.com/110036788/230706397-ce6a2f11-9df2-4cb9-b4a1-a94dbfba2cbf.png"
                alt="headphone"
              />
              <h3 className="project-title">Ebuzz.com</h3>
              <hr />
              <p className="project-description">
                ebuzz is an American multinational e-commerce platform that
                facilitates online consumer-to-consumer and business-to-consumer
                sales.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:
                <span id="tech-stack">HTML CSS AND JAVASCRIPT,REACT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                {" "}
                <a href="https://github.com/Vv97/rampant-quiet-9349">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}
                  GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://ret-vv97.vercel.app/">
                  <i class="fa-sharp fa-solid fa-link"></i>
                  {"   "}LIVE
                </a>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div>
              {" "}
              <img
                src="https://user-images.githubusercontent.com/112753516/229416049-92952fd8-2dba-4775-9436-b7b64a3e240b.png"
                alt="headphone"
              />
              <h3 className="project-title">StyloZone.com</h3>
              <hr />
              <p className="project-description">
                StyloZone is a leading e-commerce company that maintains an
                online Fashion store packed with both classic and trendy
                Clothes, beauty product and more at affordable prices.
              </p>
              <hr />
              <h4 className="project-tech-stack">
                TECH STACK:<span id="tech-stack">MERN AND JAVASCRIPT</span>{" "}
              </h4>
              <hr />
              <button className="project-github-link">
                {" "}
                <a href="https://github.com/SumanBlswas/spicy-yak-7891">
                  <i class="fa-brands fa-github" id="github"></i>
                  {"   "}
                  GITHUB
                </a>
              </button>
              <button className="project-deployed-link">
                <a href="https://frontend-nu-hazel-89.vercel.app/">
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
