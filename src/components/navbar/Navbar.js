import "./navbar.css";
import React from "react";
import { AppBar, Link, Stack, Toolbar, Typography } from "@mui/material";
import muiTheme from "../../muiTheme";
import NavBarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <AppBar
      elevation={5}
      sx={{
        boxShadow: `0px 0px 2px ${muiTheme.palette.myColor.gold}`,
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: muiTheme.palette.bgcolor.darkestBlue,
          maxHeight: "80px",
        }}
      >
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link
            href={`/`}
            underline="none"
          >
            {/* <img
              className="logo"
              src="./assets/images/logo/logo-transparent.png"
              alt="robin mon"
            /> */}
            <Typography
              fontSize="50px"
              sx={{
                color: "#ddd",
                "&:hover": {
                  color: muiTheme.palette.myColor.gold,
                },
              }}
            >
              RM
            </Typography>
          </Link>

          <NavBarLinks />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
