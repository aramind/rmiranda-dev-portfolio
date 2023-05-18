import React from "react";
import Hero from "../components/hero/Hero";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import Experiences from "../components/experiences/Experiences";
import HeroImage from "../components/hero-image/HeroImage";
import Qualifications from "../components/qualifications/Qualifications";

const MainLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      // backgroundColor="yellow"
      paddingTop="80px"
    >
      <Box
        // backgroundColor="orange"
        flexGrow={1}
        className="main-layout"
      >
        <Grid
          container
          height="100%"
        >
          <Grid
            className="centered"
            item
            xs={12}
            md={4}
            sx={{
              height: { md: `calc(100vh - 80px)` },
              // border: "1px solid orange",
            }}
          >
            <Hero />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            // backgroundColor="blue"
          >
            <HeroImage />
            <Experiences />
            <Qualifications />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainLayout;
