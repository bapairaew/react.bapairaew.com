import Link from "next/link";
import { useRouter } from "next/router";
import { Box, NavLink as A } from "theme-ui";

export default function Nav(props) {
  const router = useRouter();
  const getLinkStyle = (path, exact = false) =>
    (exact ? router.pathname === path : router.pathname.startsWith(path))
      ? undefined
      : { color: "gray" };
  return (
    <Box {...props}>
      <Link href="/thoughts">
        <A mr={3} sx={getLinkStyle("/thoughts")}>
          Thoughts
        </A>
      </Link>
      <Link href="/photos">
        <A mr={3} sx={getLinkStyle("/photos")}>
          Photos
        </A>
      </Link>
      <Link href="/works">
        <A mr={3} sx={getLinkStyle("/works")}>
          Works
        </A>
      </Link>
      <Link href="/">
        <A sx={getLinkStyle("/", true)}>About</A>
      </Link>
    </Box>
  );
}
