import Link from "next/link";
import { Card, Heading, NavLink as A, Text } from "theme-ui";

export default function ThoughtCard({ thought }) {
  return (
    <Link href={`/thoughts/${thought.slug}`} passHref>
      <A sx={{ textDecoration: "none" }}>
        <Card>
          <Heading as="h3" sx={{ fontWeight: "heading" }}>
            {thought.title}
          </Heading>
          <Text my={3} sx={{ fontSize: 1 }}>
            {thought.description}
            <Text sx={{ textDecoration: "underline" }}>Read more →</Text>
          </Text>
          {thought.publishedTime && (
            <Text my={3} variant="subtitle">
              {new Date(thought.publishedTime).toLocaleDateString()}
            </Text>
          )}
        </Card>
      </A>
    </Link>
  );
}
