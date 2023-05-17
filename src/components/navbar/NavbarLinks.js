import React, { useState } from "react";
import {
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
        gap={4}
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={`#${replaceChar(link, "_", "-")}-section`}
            sx={{
              textDecoration: "none",
              color: "#ddd",
              textTransform: "capitalize",
              "&:hover": {
                color: muiTheme.palette.myColor.gold,
              },
            }}
          >
            {replaceChar(link, "_", " ")}
          </Link>
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
        // onClick={handleCloseMenu}
        sx={{
          display: { md: "none" },
        }}
      >
        {navlinks.map((link, index) => (
          <MenuItem
            key={index}
            // onClose={handleCloseMenu}
            sx={{
              color: muiTheme.palette.bgcolor.darkBlue,
            }}
          >
            <Link
              color="inherit"
              key={index}
              href={`#${replaceChar(link, "_", "-")}-section`}
              underline="none"
            >
              {replaceChar(link, "_", " ")}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavBarLinks;
