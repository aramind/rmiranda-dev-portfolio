import React from "react";
import BallCanvas from "../canvas/Ball";
import "./qualifications.css";
const technologies = [
  {
    name: "HTML",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "ReactJS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Material UI",
    icon: "/assets/tech/mui.png",
  },
  {
    name: "NodeJS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "Express",
    icon: "/assets/tech/express.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Mongoose",
    icon: "/assets/tech/mongoose.png",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
];

const Stacks = () => {
  return (
    <>
      <br></br>
      <h2 className="section-title">My Tech Stack</h2>
      <br></br>
      <div className="stacks">
        {technologies.map((tech) => (
          <div
            className="tech"
            key={tech.name}
          >
            <BallCanvas icon={tech.icon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stacks;
