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
    <Box {...props} passHref>
      <Link href="/lists" passHref>
        <A mb={3} mr={3} sx={getLinkStyle("/lists")}>
          Lists
        </A>
      </Link>
      <Link href="/posts" passHref>
        <A mb={3} mr={3} sx={getLinkStyle("/posts")}>
          Posts
        </A>
      </Link>
      <Link href="/photography" passHref>
        <A mb={3} mr={3} sx={getLinkStyle("/photography")}>
          Photography
        </A>
      </Link>
      <Link href="/projects" passHref>
        <A mb={3} mr={3} sx={getLinkStyle("/projects")}>
          Projects
        </A>
      </Link>
      <Link mb={3} href="/" passHref>
        <A sx={getLinkStyle("/", true)}>About</A>
      </Link>
    </Box>
  );
}
