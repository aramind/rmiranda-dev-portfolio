import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "OOO Game",
    description:
      "A browser game built using Vanilla Javascript, HTML5, and CSS3",
    tech: ["html", "css", "javascript"],
    image: "/assets/projects/ooo.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "MONitime v1",
    description:
      "A time monitoring app created with MERN stack + Material UI, helping users track their daily activities and the time they spend on them.",
    tech: ["html", "css", "javascript", "react"],
    image: "/assets/projects/monitime1.jpg",
    source_code_link: "https://aramind-monitime-app.netlify.app/",
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
    source_code_link: "https://monitime.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="section projects"
    >
      <div className="section__title">Projects</div>
      <div className="section__content--flex">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            {...proj}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
