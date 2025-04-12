type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop";

type MediaType = Record<Breakpoint, (style: TemplateStringsArray | string) => string>;

const sizes: Record<Breakpoint, number> = {
  mobile: 450,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const key = label as Breakpoint;
  acc[key] = (style: TemplateStringsArray | string) => `
    @media (max-width: ${sizes[key]}px) {
      ${style}
    }
  `;
  return acc;
}, {} as MediaType);
