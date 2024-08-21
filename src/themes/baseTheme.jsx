import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: { main: "#003B5C", contrastText: "#fefcfb" },
    secondary: { main: "#2C9B39", contrastText: "#050606" },
  },
  typography: {
    fontFamily: "Copperplate, fantasy",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #D5EBD7}; }`,
    },
    MuiButton: { defaultProps: { variant: "outlined", size:"large"} },
    MuiTextField: { defaultProps: { variant: "filled" } },
    MuiPaper: { defaultProps: { sx: { border: "solid 2px" } } },
    MuiSelect: { defaultProps: { sx: { border: "solid 2px" } } },
  },
});
