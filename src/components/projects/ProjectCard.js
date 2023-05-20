import React from "react";
import { Tilt } from "react-tilt";
import { Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import muiTheme from "../../muiTheme";
import { Launch, GitHub } from "@mui/icons-material";
import "./projects.css";

const icon = {
  html: "/assets/tech/html.png",
  css: "/assets/tech/css.png",
  javascript: "/assets/tech/javascript.png",
  react: "/assets/tech/reactjs.png",
  mui: "/assets/tech/mui.png",
  nodejs: "/assets/tech/nodejs.png",
  express: "/assets/tech/express.png",
  mongodb: "/assets/tech/mongodb.png",
  mongoose: "/assets/tech/mongoose.png",
  git: "/assets/tech/git.png",
};

const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: ${muiTheme.palette.myColor.gold};
  }
`;

const ProjectCard = ({
  index,
  name,
  description,
  tech,
  image,
  repo,
  haslive,
  live,
}) => {
  return (
    <Tilt
      className="project__card"
      options={{ max: 45, scale: 1, speed: 500 }}
    >
      <div className="project__content">
        <div className="project__image centered">
          <img
            src={image}
            alt="ooo"
          />
        </div>
        <div className="project__details">
          <p className="project__title centered">{name}</p>
          <p className="project__description">{description}</p>
        </div>
        <div className="project__tech centered">
          {tech.map((item, index) => (
            <Avatar
              className="project__icons"
              key={index}
              alt={item}
              src={icon[item]}
              sx={{ width: 25, height: 25, mx: "3px" }}
            />
          ))}
        </div>
        <div className="project__actions">
          {haslive && (
            <StyledIconButton
              href={live}
              target="_blank"
            >
              <Launch />
            </StyledIconButton>
          )}
          <StyledIconButton
            href={repo}
            target="_blank"
          >
            <GitHub />
          </StyledIconButton>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
