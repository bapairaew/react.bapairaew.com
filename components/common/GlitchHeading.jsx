import { Box, Heading, useThemeUI } from "theme-ui";

export default function GlitchHeading({ ...props }) {
  const { theme } = useThemeUI();
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: -1,
          top: 0,
          clipPath: "inset(20% 0 70% 0)",
          backgroundColor: "background",
          animation: "blink-animation 500ms steps(5, start) infinite",
        }}
      >
        <Heading aria-hidden="true" {...props} />
      </Box>
      <Heading {...props} />
      <Box
        sx={{
          position: "absolute",
          right: -1,
          top: 0,
          clipPath: "inset(70% 0 20% 0)",
          backgroundColor: "background",
          animation: "blink-animation 500ms steps(5, start) infinite",
        }}
      >
        <Heading aria-hidden="true" {...props} />
      </Box>
      <style jsx global>{`
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </Box>
  );
}
