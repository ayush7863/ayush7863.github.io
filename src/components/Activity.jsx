import React from "react";
import "./Activity.css";
import img2 from "./images/Screenshot (58).png";

const Activity = () => {
  return (
    <div className="activity-container">
      <h1>Activities</h1>
      <div id="activity">
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ayush7863&show_icons=true&locale=en"
            alt="stats-1"
            id="github-stats-card"
          />
        </div>
        <div>
          {" "}
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=ayush7863&"
            alt="stats-2"
            id="github-streak-stats"
          />
        </div>
      </div>
      <div className="react-activity-calendar">       
        <div>
          <img src={img2} alt="..1" />
        </div>
      </div>
      <div className="top-langs">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayush7863&layout=compact&title_color=393739&bg_color=fbfafb&hide_border=true&text_color=393739"
            id="github-top-langs"
            alt="...2"
          />
      </div>
    </div>
  );
};
export default Activity;
