import Link from "next/link";
import { Card, Heading, NavLink as A, Text } from "theme-ui";

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <A sx={{ width: "100%" }}>
        <Card>
          <Heading as="h3" sx={{ fontWeight: "heading" }}>
            {post.title}
          </Heading>
          <Text my={3} sx={{ fontSize: 1 }}>
            {post.description}
            <Text sx={{ textDecoration: "underline" }}>Read more →</Text>
          </Text>
          {post.publishedTime && (
            <Text my={3} variant="subtitle">
              {new Date(post.publishedTime).toLocaleDateString()}
            </Text>
          )}
        </Card>
      </A>
    </Link>
  );
}
