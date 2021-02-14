import Prism from "@theme-ui/prism";
import { Link as A } from "theme-ui";
import Link from "next/link";

// https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.js
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <A target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: CustomLink,
};

export default components;
