import { system } from "@theme-ui/presets";
import * as merge from "deepmerge";

const theme = merge(system, {
  fonts: {
    body:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  sizes: {
    container: 1320,
  },
  styles: {
    // TODO: fix import prism from "@theme-ui/prism/presets/theme-ui"; throw SyntaxError: Unexpected token 'export'
    code: {
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
  layout: {
    container: {
      p: 3,
    },
  },
});

export default theme;
