import Link from "next/link";
import { Card, Heading, Link as A, Text } from "theme-ui";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <A sx={{ textDecoration: "none" }}>
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
            {project.title}
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
            {project.subtitle || "—"}
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
            {project.tags.map((t) => t.text).join(" · ")}
          </Text>
        </Card>
      </A>
    </Link>
  );
}
