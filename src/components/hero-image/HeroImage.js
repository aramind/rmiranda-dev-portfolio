import { Box } from "@mui/material";
import React from "react";

const HeroImage = () => {
  return (
    <Box
      className="centered"
      sx={{
        backgroundColor: "#1a5559",
        height: { xs: "600px", md: "100vh" },
        width: { xs: "100%", md: "100%" },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(./assets/images/image-robin-no-bg-reduced.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "fit",
          height: { xs: "700px", md: "100vh" },
          width: { xs: "100%", md: "100%" },
          scrollSnapAlign: "center",
        }}
      ></Box>
    </Box>
  );
};

export default HeroImage;
