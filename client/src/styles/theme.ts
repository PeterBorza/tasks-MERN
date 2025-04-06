type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop";

const sizes: Record<Breakpoint, number> = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};

export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    const key = label as Breakpoint;
    acc[key] = (style: TemplateStringsArray | string) => `
    @media (max-width: ${sizes[key]}px) {
      ${style}
    }
  `;
    return acc;
  },
  {} as Record<Breakpoint, (style: TemplateStringsArray | string) => string>
);

export const theme = {
  media,
  sizes,
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
