import { AspectRatio, Flex, Image, Text } from "theme-ui";

export default function PhotoCard({ photo }) {
  return (
    <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
      <AspectRatio
        ratio={1 / 1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          sx={{
            objectFit: "cover",
          }}
          src={`/photos/${photo.slug}.jpeg`}
          alt={photo.description}
        />
      </AspectRatio>
      <Text variant="subtitle" color="gray" sx={{ textAlign: "center" }}>
        {photo.description}
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
        {photo.date ? new Date(photo.date).toLocaleDateString() : ""}
      </Text>
    </Flex>
  );
}
