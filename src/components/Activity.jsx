import React from "react";
import "./Activity.css";
// import img2 from "./images/Screenshot (58).png";

const Activity = () => {

  // const styles={
  //   backgroundImage: `url${(img2)}`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height:"200px"

  // }
  return (
    <div className="activity-container">
      <h1>Activities</h1>
      <div id="activity">
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ayush7863&show_icons=true&theme=radical"
            alt="stats-1"
            id="github-stats-card"
          />
        </div>
        <div>
          {" "}
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=ayush7863&&show_icons=true&theme=radical"
            alt="stats-2"
            id="github-streak-stats"
          />
        </div>
      </div>
      <div className="top-langs">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayush7863&&show_icons=true&theme=radical"
            id="github-top-langs"
            alt="...2"
          />
      </div>
      {/* <div className="react-activity-calendar" style={styles} >        */}
        {/* <div>
          <img src={img2} alt="..1" />
        </div> */}
      {/* </div> */}
      
    </div>
  );
};
export default Activity;
