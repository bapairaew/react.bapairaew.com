import Link from "next/link";
import { Card, Flex, Heading, NavLink as A, Text } from "theme-ui";

export default function PostCard({ post, titleAs = "h3" }) {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <A sx={{ width: "100%" }}>
        <Card>
          <Heading as={titleAs} sx={{ fontWeight: "heading", fontSize: 3 }}>
            {post.title}
          </Heading>
          <Text as="p" my={3}>
            {post.description}
          </Text>
          <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
            {post.publishedTime && (
              <Text as="p" my={3} variant="subtitle">
                {new Date(post.publishedTime).toLocaleDateString()}
              </Text>
            )}
            <Text variant="subtitle" sx={{ textDecoration: "underline" }}>
              Read more →
            </Text>
          </Flex>
        </Card>
      </A>
    </Link>
  );
}
