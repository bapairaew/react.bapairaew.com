import Link from "next/link";
import { Box, Container, Flex, Heading, NavLink as A } from "theme-ui";
import Nav from "~/components/common/Nav";
import NavMenu from "~/components/common/NavMenu";

export default function Header() {
  return (
    <Container as="header" py={[3, 3, 4]}>
      <Flex sx={{ flexWrap: "wrap" }}>
        <Box mb={3} sx={{ flex: "1 1 auto" }}>
          <Link href="/" passHref>
            <A>
              <Heading>N.</Heading>
            </A>
          </Link>
        </Box>
        <Box sx={{ display: ["none", "block", "block"] }}>
          <Nav />
        </Box>
        <Box sx={{ display: ["block", "none", "none"] }}>
          <NavMenu>
            <Nav
              sx={{ display: "flex", flexDirection: "column", fontSize: 3 }}
            />
          </NavMenu>
        </Box>
      </Flex>
    </Container>
  );
}
