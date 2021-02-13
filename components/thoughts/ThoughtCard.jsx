import Link from "next/link";
import { Heading, Link as A, Text } from "theme-ui";

export default function ThoughtCard({ thought }) {
  return (
    <Link href={`/thoughts/${thought.slug}`}>
      <A>
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
      </A>
    </Link>
  );
}
