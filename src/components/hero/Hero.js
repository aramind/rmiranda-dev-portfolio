import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import muiTheme from "../../muiTheme";
import { styled } from "@mui/system";
import "./hero.css";
import "./stars.css";
const StyledText = styled(Typography)`
  font-family: "Prompt", sans-serif;
`;

const StyledButton = styled(Button)`
  font-family: "Prompt", sans-serif;
  font-size: 1.1rem;
  width: 100%;
  max-width: 300px;
  padding: 10px 0 10px 0;
`;

const Hero = () => {
  return (
    <Stack
      sx={{
        padding: "1.5rem",
        justifyContent: "center",
        height: { md: "100%" },
        maxHeight: "1000px",
        position: { md: "fixed" },
        width: { md: "33vw" },
        maxWidth: "500px",
        // backgroundColor: "yellow",
      }}
      gap={2}
    >
      <Stack alignItems="flex-start">
        <StyledText
          variant="h2"
          color={muiTheme.palette.myColor.gold}
          sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "3.3rem" } }}
        >
          Hi!👋
        </StyledText>
        <StyledText
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
          }}
        >
          I'm <b>Mon</b>.
        </StyledText>
        <StyledText
          className="italic"
          variant="caption"
          color={muiTheme.palette.myColor.gold}
          fontSize="0.7rem"
          sx={{ fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.1rem" } }}
        >
          Passionate about turning ideas into reality.
        </StyledText>
        <br></br>
        <StyledText
          variant="body2"
          sx={{ fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.5rem" } }}
        >
          I provide solutions through web applications.
        </StyledText>
        <br></br>
      </Stack>
      <Stack
        gap={2}
        alignItems="flex-start"
      >
        <StyledButton variant="contained">View my Resume</StyledButton>
        <StyledButton variant="contained">Download my Resume</StyledButton>
        <StyledButton variant="contained">Contact Me</StyledButton>
      </Stack>
    </Stack>
  );
};

export default Hero;
