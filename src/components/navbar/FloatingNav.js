import React from "react";
import {
  Code,
  Construction,
  Email,
  MenuBook,
  Navigation,
  Work,
} from "@mui/icons-material";
import { IconButton, SpeedDial, SpeedDialAction } from "@mui/material";
import { navlinks } from "../../data/data";
import { replaceChar } from "../../helpers/replaceChar";
import muiTheme from "../../muiTheme";

const icons = [
  { icon: <Work />, name: "experiences" },
  { icon: <Construction />, name: "tech_stack" },
  { icon: <Code />, name: "projects" },
  { icon: <MenuBook />, name: "professional_development" },
  { icon: <Email />, name: "contact" },
];

const FloatingNav = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation"
      sx={{
        position: "fixed",
        bottom: 72,
        right: 24,
      }}
      icon={<Navigation />}
    >
      {navlinks.map((link) => (
        <SpeedDialAction
          key={link}
          icon={
            <IconButton href={`#${replaceChar(link, "_", "-")}-section`}>
              {icons.find((e) => link === e.name).icon}
            </IconButton>
          }
          tooltipTitle={replaceChar(link, "_", " ").toUpperCase()}
          sx={{
            backgroundColor: muiTheme.palette.primary.main,
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default FloatingNav;
