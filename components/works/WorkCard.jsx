import Link from "next/link";
import { Card, Heading, Link as A, Text } from "theme-ui";

export default function WorkCard({ work }) {
  return (
    <Link href={`/works/${work.slug}`}>
      <A>
        <Card>
          <Heading
            as="h2"
            sx={{
              fontWeight: "display",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {work.title}
          </Heading>
          <Text
            mt={1}
            color="gray"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {work.subtitle || "—"}
          </Text>
          <Text
            mt={1}
            variant="subtitle"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {work.tags.map((t) => t.text).join(" · ")}
          </Text>
        </Card>
      </A>
    </Link>
  );
}
