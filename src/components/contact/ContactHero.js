import { Box } from "@mui/material";
import React from "react";
import BallCanvas from "../canvas/Ball";

const ContactHero = () => {
  return (
    <Box
      className="contact-hero"
      sx={{
        height: { xs: "200px", sm: "300px" },
      }}
    >
      <BallCanvas icon="/assets/images/logo/logo-no-background.svg" />
    </Box>
  );
};

export default ContactHero;
