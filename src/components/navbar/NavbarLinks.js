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
        gap={8}
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
      </Menu>
    </>
  );
};

export default NavBarLinks;
