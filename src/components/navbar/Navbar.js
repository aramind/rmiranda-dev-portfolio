import "./navbar.css";
import React from "react";
import { AppBar, Link, Stack, Toolbar } from "@mui/material";
import muiTheme from "../../muiTheme";
import NavBarLinks from "./NavbarLinks";
import BallCanvas from "../canvas/Ball";

const Navbar = () => {
  return (
    <AppBar elevation={5}>
      <Toolbar
        sx={{
          backgroundColor: muiTheme.palette.bgcolor.darkestBlue,
        }}
      >
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link
            href={`#`}
            underline="none"
          >
            <div className="logo">
              <BallCanvas icon="/assets/images/logo/logo-no-background.svg" />
            </div>
          </Link>
          <NavBarLinks />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
