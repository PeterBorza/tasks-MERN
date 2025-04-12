import { media } from "./types";

export const theme = {
  media,
  colors: {
    dark: "#242424",
    light: "#f5f5f0",
    main: "#ffaa00",
    error: "#FF2C2C",
    green: {
      lightest: "#e9f5db",
      light: "#cfe1b9",
      default_light: "#b5c99a",
      default_dark: "#97a97c",
      darker: "#87986a",
      darkest: "#718355",
    },
  },
  fontSize: {
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
  },
};

export type ThemeType = typeof theme;
