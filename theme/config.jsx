import { system } from "@theme-ui/presets";
import * as merge from "deepmerge";

const textContainerStyle = {
  maxWidth: 680,
  mx: "auto",
  px: 3,
};

const theme = merge(system, {
  colors: {
    muted: "#e8e8e8",
  },
  fonts: {
    body:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  text: {
    subtitle: {
      fontSize: 1,
      color: "gray",
    },
  },
  layout: {
    container: {
      p: 3,
    },
    text: {
      p: 3,
      maxWidth: 680,
      mx: "auto",
    },
  },
  sizes: {
    container: 1320,
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
  zIndices: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
  links: {
    nav: {
      fontWeight: "body",
      cursor: "pointer",
    },
  },
  cards: {
    primary: {
      p: 3,
      borderRadius: "default",
      borderTop: "1px solid",
      borderLeft: "1px solid",
      borderBottom: "4px solid",
      borderRight: "4px solid",
      borderColor: "text",
      backgroundColor: "background",
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
    },
    secondary: {
      cursor: "pointer",
    },
  },
  styles: {
    a: {
      color: "text",
      cursor: "pointer",
    },
    h1: textContainerStyle,
    h2: textContainerStyle,
    h3: textContainerStyle,
    h4: textContainerStyle,
    h5: textContainerStyle,
    h6: textContainerStyle,
    ul: { ...textContainerStyle, pl: 5 },
    ol: { ...textContainerStyle, pl: 5 },
    p: textContainerStyle,
    // TODO: fix import prism from "@theme-ui/prism/presets/theme-ui"; throw SyntaxError: Unexpected token 'export'
    code: {
      ...textContainerStyle,
      ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
        color: "gray",
      },
      ".comment": {
        fontStyle: "italic",
      },
      ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable": {
        color: "accent",
      },
      ".atrule, .attr-value, .keyword": {
        color: "primary",
      },
      ".selector, .attr-name, .string, .char, .builtin, .inserted": {
        color: "secondary",
      },
    },
  },
});

export default theme;
