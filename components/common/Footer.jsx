import { Box, Container } from "theme-ui";

export default function Footer() {
  return (
    <Container
      pt={6}
      pb={4}
      color="gray"
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Box>© {new Date().getFullYear()} Narudom Techaval</Box>
    </Container>
  );
}
