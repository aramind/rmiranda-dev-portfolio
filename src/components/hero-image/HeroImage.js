import { Box } from "@mui/material";
import React from "react";

const HeroImage = () => {
  return (
    <Box
      className="centered"
      sx={{
        backgroundColor: "#1a5559",
        height: { xs: "700px", md: "100vh" },
        maxHeight: { xs: "700px", md: "700px" },
        width: { xs: "100%", md: "100%" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(./assets/images/image-robin-no-bg-reduced.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center", md: "calc(50% + 250px) -180px" },
          backgroundSize: "fit",

          height: { xs: "700px", md: "100vh" },
          width: { xs: "100%", md: "100%" },
          backgroundAttachment: { md: "fixed" },
        }}
      ></Box>
    </Box>
  );
};

export default HeroImage;
