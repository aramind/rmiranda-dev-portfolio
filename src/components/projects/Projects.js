import React from "react";
import ProjectCard from "./ProjectCard";
import { Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    name: "Basic Portfolio",
    description:
      "My first project related to web development. Built using only HTML and CSS.",
    tech: ["html", "css"],
    image: "/assets/projects/port1.jpg",
    repo: "https://github.com/aramind/first-web-dev-portfolio",
    haslive: true,
    live: "https://23cond.github.io/my-dev-portfolio/",
  },
  {
    name: "OOO Game",
    description:
      "Outsmarting Offworld Oppressors Game. A simple browser game based on odd one out puzzles. Built using Vanilla Javascript, HTML5, and CSS3",
    tech: ["html", "css", "javascript"],
    image: "/assets/projects/ooo.jpg",
    repo: "https://github.com/aramind/OOO---Outsmarting-Offworld-Oppressors-Game",
    haslive: true,
    live: "https://aramind.github.io/OOO---Outsmarting-Offworld-Oppressors-Game/",
  },
  {
    name: "MONitime v1",
    description: "A time monitoring app for personal use running on browser.",
    tech: ["html", "css", "javascript", "react"],
    image: "/assets/projects/monitime1.jpg",
    repo: "https://github.com/aramind/MONitime-App-v1",
    haslive: true,
    live: "https://aramind-monitime-app.netlify.app/",
  },
  {
    name: "monitime-api",
    description:
      "A RESTful API used as the backend of MONitime app. Provides the needed API requests and database management of the app.",
    tech: ["nodejs", "express", "mongodb", "mongoose"],
    image: "/assets/projects/monitime-api.jpg",
    repo: "https://github.com/aramind/monitime-api",
    haslive: false,
    live: "https://github.com/aramind/monitime-api",
  },
  {
    name: "MONitime v2",
    description:
      "A time monitoring app created with MERN stack + Material UI, helping users track their daily activities and the time they spend on them.",
    tech: [
      "html",
      "css",
      "javascript",
      "react",
      "mui",
      "nodejs",
      "express",
      "mongodb",
      "mongoose",
    ],
    image: "/assets/projects/monitime2.png",
    repo: "https://github.com/aramind/MONitime",
    haslive: true,
    live: "https://monitime.onrender.com/",
  },
  {
    name: "rmiranda | portfolio",
    description:
      "My dev portfolio created after finishing the full stack web dev bootcamp of Uplift Code Camp.",
    tech: ["html", "css", "javascript", "react", "mui"],
    image: "/assets/projects/port2.jpg",
    repo: "https://github.com/aramind/rmiranda-dev-portfolio",
    haslive: true,
    live: "https://rmiranda-dev-portfolio.onrender.com/",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation only triggers once
  });

  return (
    <section
      id="projects-section"
      className="section projects"
      ref={ref}
    >
      <div className="section__title">Projects</div>
      <Grow
        in={inView}
        style={{ transformOrigin: "0 0 0" }}
        {...(inView ? { timeout: 2500 } : {})}
      >
        <div className="section__content--flex">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              {...proj}
            />
          ))}
        </div>
      </Grow>
      <br></br>
    </section>
  );
};

export default Projects;
