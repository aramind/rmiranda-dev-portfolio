import React from "react";
import Hero from "../components/hero/Hero";
import { Box, Grid } from "@mui/material";
import Experiences from "../components/experiences/Experiences";
import HeroImage from "../components/hero-image/HeroImage";
import Stacks from "../components/qualifications/Stacks";
import Projects from "../components/projects/Projects";
import PDev from "../components/qualifications/PDev";
import Contact from "../components/contact/Contact";

const MainLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      paddingTop="80px"
    >
      <Box
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
            }}
          >
            <Hero />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
          >
            <HeroImage />
            <Experiences />
            <Stacks />
            <Projects />
            <PDev />
          </Grid>
        </Grid>
      </Box>
      <Contact />
    </Box>
  );
};

export default MainLayout;
