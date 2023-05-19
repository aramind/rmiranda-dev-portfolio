import React from "react";
import BallCanvas from "../canvas/Ball";
import "./qualifications.css";
import { Box } from "@mui/material";
const tech = [
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
    name: "Git",
    icon: "/assets/tech/git.png",
  },
];

const Stacks = () => {
  return (
    <section
      id="stacks-section"
      className="section projects"
    >
      <div className="section__title">Tech Stack</div>
      <Box
        className="stacks"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {tech.map((tech) => (
          <div
            className="tech"
            key={tech.name}
          >
            <BallCanvas icon={tech.icon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </Box>
      <Box
        className="stacks-mobile"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        {tech.map((tech) => (
          <div
            className="tech-mobile"
            key={tech.name}
          >
            <div className="tech-mobile-logo centered">
              <img
                src={tech.icon}
                alt={tech.name}
              />
            </div>
            <p>{tech.name}</p>
          </div>
        ))}
      </Box>
      <br></br>
    </section>
  );
};

export default Stacks;
