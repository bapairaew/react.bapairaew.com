import { system } from "@theme-ui/presets";
import * as merge from "deepmerge";

const textContainerStyle = {
  maxWidth: 680,
  mx: "auto",
  px: 3,
};

const theme = merge(system, {
  fonts: {
    body:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  sizes: {
    container: 1320,
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
  links: {
    cursor: "pointer",
    nav: {
      fontWeight: "body",
      cursor: "pointer",
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  styles: {
    a: {
      color: "text",
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
