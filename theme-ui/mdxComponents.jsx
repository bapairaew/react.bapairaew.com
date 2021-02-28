import Prism from "@theme-ui/prism";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio, Grid, Link as A, Text } from "theme-ui";

// https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.js
const MdxLink = ({ children, ...props }) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <A target="_blank" rel="noopener noreferrer" {...props}>
      {children} ↗
    </A>
  );
};

const MdxImage = ({ src, alt }) => {
  return (
    <>
      <AspectRatio
        ratio={4 / 3}
        my={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image layout="fill" objectFit="cover" src={src} alt={alt} />
      </AspectRatio>
      <Text variant="subtitle" sx={{ textAlign: "center" }}>
        {alt}
      </Text>
    </>
  );
};

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: MdxLink,
  img: MdxImage,
  Grid,
};

export default components;
