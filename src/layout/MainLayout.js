import React from "react";
import Hero from "../components/hero/Hero";
import { Box, Grid, Stack, Toolbar } from "@mui/material";
import Right from "../components/Right";

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
          // sx={{ border: "1px solid orange" }}
          height="100%"
        >
          <Grid
            item
            xs={12}
            md={4}
            height={`calc(100vh - 80px)`}
          >
            <Hero />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            // backgroundColor="blue"
          >
            <Right />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainLayout;
