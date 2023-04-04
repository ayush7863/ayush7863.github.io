import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about section" id="about">
        <div>
          <img
            src="https://raw.githubusercontent.com/mhmzdev/mhmzdev/master/code.gif"
            alt="..."
          />
        </div>
        <div>
          <h2>About Me</h2>
          <hr />
          <p id="user-detail-intro">
            Full-Stack Web Developer with the ability to learn and collaborate
            in rapidly changing environments and compositions. Worked through
            1000+ hours of Bootcamp structure learning JavaScript , Redux ,
            React.js , MongoDB , NextJs , HTML5 , and CSS3.
          </p>
        </div>
      </div>
    </div>
  );
};
// export const Contact=()=>{
//   return (
//     <div>Contact</div> https://raw.githubusercontent.com/mhmzdev/mhmzdev/master/code.gif
//   )
// }

export default About;
