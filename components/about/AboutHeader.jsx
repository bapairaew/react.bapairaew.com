import { Box, Container, Flex } from "theme-ui";
import Nav from "~/components/common/Nav";

export default function AboutHeader() {
  return (
    <Container py={[3, 3, 4]}>
      <Flex>
        <Box sx={{ flex: "1 1 auto" }}></Box>
        <Nav />
      </Flex>
    </Container>
  );
}
