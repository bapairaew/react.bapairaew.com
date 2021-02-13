import Link from "next/link";
import { useRouter } from "next/router";
import { Box, MenuButton, Link as A } from "theme-ui";

export default function Nav() {
  const router = useRouter();
  const getLinkStyle = (path, exact = false) =>
    (exact ? router.pathname === path : router.pathname.startsWith(path))
      ? undefined
      : { color: "gray", textDecoration: "underline" };
  return (
    <>
      <Box
        sx={{
          display: ["flex", "none", "none"],
        }}
      >
        <MenuButton aria-label="toggle navigation" />
      </Box>
      <Box
        sx={{
          display: ["none", "flex", "flex"],
        }}
      >
        <Link href="/thoughts">
          <A mr={3} sx={getLinkStyle("/thoughts")}>
            thoughts
          </A>
        </Link>
        <Link href="/photos">
          <A mr={3} sx={getLinkStyle("/photos")}>
            photos
          </A>
        </Link>
        <Link href="/works">
          <A mr={3} sx={getLinkStyle("/works")}>
            works
          </A>
        </Link>
        <Link href="/">
          <A sx={getLinkStyle("/", true)}>about</A>
        </Link>
      </Box>
    </>
  );
}
