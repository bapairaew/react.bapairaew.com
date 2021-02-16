import Link from "next/link";
import { Box, Container, Flex, Heading, NavLink as A } from "theme-ui";
import Nav from "~/components/common/Nav";

export default function Header() {
  return (
    <Container py={[3, 3, 4]}>
      <Flex sx={{ flexWrap: "wrap" }}>
        <Box mb={3} sx={{ flex: "1 1 auto" }}>
          <Link href="/" passHref>
            <A>
              <Heading>Narudom.</Heading>
            </A>
          </Link>
        </Box>
        <Nav mb={3} />
      </Flex>
    </Container>
  );
}
