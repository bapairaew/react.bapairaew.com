import Link from "next/link";
import { Box, Container, Flex, Heading, Link as A } from "theme-ui";
import Nav from "~/components/common/Nav";

export default function Header() {
  return (
    <Container py={[3, 3, 4]}>
      <Flex>
        <Box sx={{ flex: "1 1 auto" }}>
          <Link href="/">
            <A>
              <Heading>Narudom.</Heading>
            </A>
          </Link>
        </Box>
        <Nav />
      </Flex>
    </Container>
  );
}
