import { Box, Heading, useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

export default function GlitchHeading({ ...props }) {
  const { theme } = useThemeUI();
  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        animate={[
          {
            clipPath: "inset(40% 0 61% 0)",
          },
          {
            clipPath: "inset(92% 0 1% 0)",
          },
          {
            clipPath: "inset(43% 0 1% 0)",
          },
          {
            clipPath: "inset(25% 0 58% 0)",
          },
          {
            clipPath: "inset(54% 0 7% 0)",
          },
          {
            clipPath: "inset(58% 0 43% 0)",
          },
        ]}
        transition={{ repeat: Infinity, duration: 0.5 }}
        style={{
          position: "absolute",
          left: -2,
          top: -2,
          zIndex: -1,
        }}
      >
        <Heading aria-hidden="true" {...props} />
      </motion.div>
      <motion.div
        animate={[
          {
            clipPath: "inset(40% 0 61% 0)",
          },
          {
            clipPath: "inset(92% 0 1% 0)",
          },
          {
            clipPath: "inset(43% 0 1% 0)",
          },
          {
            clipPath: "inset(25% 0 58% 0)",
          },
          {
            clipPath: "inset(54% 0 7% 0)",
          },
          {
            clipPath: "inset(58% 0 43% 0)",
          },
        ]}
        transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
        style={{
          position: "absolute",
          right: -2,
          right: -2,
          zIndex: -1,
        }}
      >
        <Heading aria-hidden="true" {...props} />
      </motion.div>
      <Heading {...props} />
    </Box>
  );
}
