import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1a5559",
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
  success: {
    main: "#2b9348",
  },
  error: {
    main: "#ef476f",
  },
});

export default muiTheme;
