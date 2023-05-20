import {
  Button,
  Link,
  Stack,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";
import React from "react";
import muiTheme from "../../muiTheme";
import { styled } from "@mui/system";
import "./hero.css";
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

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: 20,
  },
}));

const Hero = () => {
  return (
    <Stack
      className="hero"
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
      <Stack
        alignItems="flex-start"
        className="header"
      >
        <StyledText
          variant="h2"
          color={muiTheme.palette.myColor.gold}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.7rem" } }}
        >
          Hi!👋
        </StyledText>
        <LightTooltip
          title="ROBIN MON R. MIRANDA"
          placement="right-start"
        >
          <StyledText
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            I'm <b id="my-name">Mon</b>.
          </StyledText>
        </LightTooltip>
        <StyledText
          className="italic"
          variant="caption"
          color={muiTheme.palette.myColor.gold}
          fontSize="0.7rem"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
        >
          Passionate about turning ideas into reality.
        </StyledText>
        <br></br>
        <Stack spacing={2}>
          <StyledText
            variant="body2"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}
          >
            I provide solutions through web applications.
          </StyledText>
          {/* <Stack spacing={0.5}>
            <StyledText
              variant="body2"
              sx={{
                fontFamily: "Exo 2",
                color: muiTheme.palette.myColor.pink,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              {`
              currently looking = ( ) =>  { for web dev related project and/or work. 
              `}
            </StyledText>
            <StyledText
              variant="body2"
              sx={{
                fontFamily: "Exo 2",
                color: muiTheme.palette.myColor.pink,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              {`};`}
            </StyledText>
          </Stack> */}
        </Stack>
        <br></br>
      </Stack>

      <Stack
        gap={2}
        alignItems="flex-start"
      >
        <Stack spacing={0.5}>
          <StyledText
            variant="body2"
            sx={{
              fontFamily: "Exo 2",
              color: muiTheme.palette.myColor.pink,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            const [work, setWork] = useState(<span id="null-word">null</span>)
          </StyledText>
          <StyledText
            variant="body2"
            sx={{
              fontFamily: "Exo 2",
              color: muiTheme.palette.myColor.pink,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            setWork (
          </StyledText>
        </Stack>
        <Link
          className=" hero-btn-link"
          href="https://drive.google.com/file/d/1hS8Bvp5exjh9cPVTS1nl1iyAWvLj960s/view?usp=share_link"
          target="_blank"
        >
          <StyledButton variant="contained">View my Resume</StyledButton>
        </Link>
        <Link
          className=" hero-btn-link"
          href="/assets/files/Resume_Robin Mon R. Miranda.pdf"
          download
        >
          <StyledButton variant="contained">Download my Resume</StyledButton>
        </Link>
        <Link
          className=" hero-btn-link contact-btn"
          href="#contact-section"
        >
          <StyledButton variant="contained">Contact Me</StyledButton>
        </Link>
        <StyledText
          variant="body2"
          sx={{
            fontFamily: "Exo 2",
            color: muiTheme.palette.myColor.pink,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          ) ;
        </StyledText>
      </Stack>
    </Stack>
  );
};

export default Hero;
