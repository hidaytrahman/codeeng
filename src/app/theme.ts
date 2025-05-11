"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
    // enable dark mode from system preference
//   colorSchemes: {
//     dark: true,
//   },
  palette: {
    mode: "light",
    primary: {
      main: "#73946B",
      light: "#9EBC8A",
      dark: "#537D5D",
    },
    secondary: {
      main: "#D2D0A0",
      light: "#E4E1B5",
      dark: "#B8B68A",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
