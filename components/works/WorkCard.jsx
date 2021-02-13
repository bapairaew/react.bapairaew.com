import Link from "next/link";
import { Flex, Heading, Image, Text, AspectRatio, Link as A } from "theme-ui";

export default function WorkCard({ work }) {
  return (
    <Link href={`/works/${work.slug}`}>
      <A>
        <Flex p={4} sx={{ flexDirection: "column", justifyContent: "center" }}>
          <AspectRatio
            ratio={1 / 1}
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={
                work.image || "https://via.placeholder.com/500/FFFFFF/AAAAAA"
              }
              alt={work.title}
            />
          </AspectRatio>
          <Heading as="h3" sx={{ fontWeight: "body", textAlign: "center" }}>
            {work.title}
          </Heading>
          <Text color="gray" sx={{ textAlign: "center" }}>
            {work.year}
          </Text>
          <Text
            mt={1}
            variant="subtitle"
            sx={{
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {work.tags.map((t) => t.text).join(" · ")}
          </Text>
        </Flex>
      </A>
    </Link>
  );
}
