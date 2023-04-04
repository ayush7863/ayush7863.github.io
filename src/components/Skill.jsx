import React from "react";
import "./Skill.css";

const Skill = () => {
  const images = [
    {
      id: 1,
      logo: "https://rushijoshi3798.github.io/assets/HTML_icon.png",
      title: "HTML",
    },
    {
      id: 2,
      logo: "https://rushijoshi3798.github.io/assets/icons8-react-native-96.png",
      title: "ReactJs",
    },
    {
      id: 3,
      logo: "https://rushijoshi3798.github.io/assets/icons8-javascript-96.png",
      title: "JavaScript",
    },
    {
      id: 4,
      logo: "https://rushijoshi3798.github.io/assets/icons8-css3-96.png",
      title: "CSS",
    },
    {
      id: 5,
      logo: "https://rushijoshi3798.github.io/assets/icons8-typescript-96.png",
      title: "TypeScript",
    },
    {
      id: 6,
      logo: "https://rushijoshi3798.github.io/assets/icons8-express-js-96.png",
      title: "ExpressJS",
    },
    {
      id: 7,
      logo: "https://rushijoshi3798.github.io/assets/mongodb_icon_final-removebg-preview.png",
      title: "MongoDB",
    },
    {
      id: 8,
      logo: "https://rushijoshi3798.github.io/assets/icons8-nodejs-96.png",
      title: "NodeJS",
    },
    {
      id: 9,
      logo: "https://rushijoshi3798.github.io/assets/icons8-redux-96.png",
      title: "Redux",
    },
    {
      id: 10,
      logo: "https://rushijoshi3798.github.io/assets/icons8-chakra-ui-96.png",
      title: "ChakraUI",
    },
    {
      id: 11,
      logo: "https://rushijoshi3798.github.io/assets/icons8-tailwindcss-96.png",
      title: "Tailwind",
    },
    {
      id: 12,
      logo: "https://rushijoshi3798.github.io/assets/icons8-figma-96.png",
      title: "Figma",
    },
  ];
  return (
    <div id="skills">
      <h1 className="skill-card-name">
        S<span id="title">KILLS</span>{" "}
      </h1>
      <div className="card-container">
        {images.map((el) => (
          <div className="skills-card" key={el.id}>
            <img src={el.logo} alt={el.id} className="skills-card-img" />
            <div className="skills-card-name">{el.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
