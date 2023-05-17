import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#15664F",
      light: "#3D816E",
      dark: "#1a5559",
    },
    bgcolor: {
      darkestBlue: "#051923",
      darkBlue: "#00273d",
      blue: "#004e7a",
    },
    hovercolor: {
      text: "#00e1ff",
    },
    myColor: {
      pink: "#ef476f",
      gold: "goldenrod",
    },
  },
});

export default muiTheme;
