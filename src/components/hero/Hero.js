import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import muiTheme from "../../muiTheme";
import { styled } from "@mui/system";

const StyledText = styled(Typography)`
  font-family: "Prompt", sans-serif;
`;

const StyledButton = styled(Button)`
  font-family: "Prompt", sans-serif;
  width: 100%;
  max-width: 300px;
`;

const Hero = () => {
  return (
    <Stack
      sx={{
        // border: "1px solid red",
        padding: "0 5% 5% 5%",
        justifyContent: "center",
        height: { md: "100%" },
        position: { md: "fixed" },
        width: { md: "33vw" },
      }}
      gap={2}
    >
      <Stack alignItems="flex-start">
        <StyledText
          variant="h2"
          fontSize="2rem"
          color={muiTheme.palette.myColor.gold}
        >
          Hi!👋
        </StyledText>
        <StyledText
          variant="h1"
          fontSize="2.5rem"
          fontWeight="bold"
        >
          I'm Robin
        </StyledText>
        <StyledText
          variant="caption"
          color={muiTheme.palette.myColor.gold}
          fontSize="0.7rem"
        >
          Passionate about turning ideas into reality.
        </StyledText>
        <br></br>
        <StyledText variant="body2">
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
