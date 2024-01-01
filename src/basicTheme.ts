import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backdropFilter: "none",

          "&.MuiBackdrop-invisible": {
            backgroundColor: "transparent",
            backdropFilter: "none",
          },
        },
      },
    },
  },
});

export default theme;
