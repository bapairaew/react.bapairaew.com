import Link from "next/link";
import { Card, Heading, NavLink as A, Text } from "theme-ui";

export default function ProjectCard({ project, titleAs = "h3" }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <A sx={{ width: "100%" }}>
        <Card>
          <Heading
            as={titleAs}
            sx={{
              fontWeight: "display",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: 3,
            }}
          >
            {project.title}
          </Heading>
          <Text
            as="p"
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
            as="p"
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
