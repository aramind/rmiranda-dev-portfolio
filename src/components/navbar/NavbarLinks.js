import React, { useState } from "react";
import {
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { replaceChar } from "../../helpers/replaceChar";
import muiTheme from "../../muiTheme";
import { navlinks } from "../../data/data";

import "./navbar.css";

const navIcons = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/robin-mon-miranda",
  },
  {
    name: "github",
    href: "https://github.com/aramind",
  },
  {
    name: "resume",
    href: "https://drive.google.com/file/d/1hS8Bvp5exjh9cPVTS1nl1iyAWvLj960s/view?usp=share_link",
  },
];

const NavBarLinks = () => {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        gap={6}
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {navlinks.map((link, index) => (
          <a
            className="navlink"
            underline="none"
            key={index}
            href={`#${replaceChar(link, "_", "-")}-section`}
            sx={{
              fontSize: "1.1rem",
              color: "#ccc",
            }}
          >
            {replaceChar(link, "_", " ")}
          </a>
        ))}
        <div className="navbar__socials centered">
          {navIcons.map((social) => (
            <Tooltip
              key={social.name}
              title={`view ${social.name}`}
              arrow
              placement="top-end"
            >
              <Link
                href={social.href}
                target="_blank"
              >
                <img
                  src={`/assets/socials/${social.name}.png`}
                  alt={`${social.name} logo`}
                />
              </Link>
            </Tooltip>
          ))}
        </div>
      </Stack>
      <Tooltip
        title="Show Links"
        sx={{
          display: { md: "none" },
        }}
      >
        <IconButton onClick={(e) => setAnchorMenu(e.currentTarget)}>
          <MenuIcon sx={{ fontSize: "50px" }} />{" "}
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-links"
        open={Boolean(anchorMenu)}
        anchorEl={anchorMenu}
        onClose={handleCloseMenu}
        sx={{
          display: { md: "none" },
        }}
      >
        {navlinks.map((link, index) => (
          <MenuItem
            key={index}
            sx={{
              color: muiTheme.palette.bgcolor.darkBlue,
            }}
            onClick={handleCloseMenu}
          >
            <Link
              className="navlink"
              color="inherit"
              underline="none"
              href={`#${replaceChar(link, "_", "-")}-section`}
              sx={{
                width: "100%",
              }}
            >
              <Button
                variant="text"
                size="large"
                sx={{
                  padding: 0,
                  width: "100%",
                  height: "40px",
                }}
              >
                {replaceChar(link, "_", " ")}
              </Button>
            </Link>
          </MenuItem>
        ))}
        <div className="navbar__socials centered">
          {navIcons.map((social) => (
            <Tooltip
              key={social.name}
              title={`view ${social.name}`}
              arrow
              placement="top-end"
            >
              <Link
                href={social.href}
                target="_blank"
              >
                <img
                  src={`/assets/socials/${social.name}.png`}
                  alt={`${social.name} logo`}
                />
              </Link>
            </Tooltip>
          ))}
        </div>
      </Menu>
    </>
  );
};

export default NavBarLinks;
