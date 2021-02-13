import { Box, Flex, Heading, Link, Text } from "theme-ui";

export default function AboutHero() {
  return (
    <Flex
      py={6}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading
        as="h1"
        sx={{ fontSize: [6, 8, 8], textAlign: "center", fontWeight: "display" }}
      >
        Narudom
        <br />
        Techaval
      </Heading>
      <Text mt={3} color="gray" sx={{ fontSize: [3, 4, 4] }}>
        Software Engineer
      </Text>
      <Box mt={6} px={3} variant="layout.text">
        <Text my={3}>
          I am a software engineer who enjoy involving in the whole product
          development life cycle from ideating, designing and coding on both
          backend and frontend. I have been moving around a few countries while
          working and studying.
        </Text>
        <Text my={3}>
          I love building things that bring values and make impacts to people's
          life. That is the reason why I have become an engineer. I also enjoy
          experiencing different environments and meeting new people which is
          why I travel the world.
        </Text>
        <Text my={3}>
          I consider myself pragmatic, flexibile, and open-minded which pushes
          me to learn new things especially in software engineering so to be
          able to pick the most suitable tool once opportunity arises. I can use
          pretty most of the popular tools in both frontend and backend, for
          example, React, Node.js, Java, and Serverless.
        </Text>
        <Text my={3}>
          You can find the list of <Link href="#works">my works and tools</Link>{" "}
          below but I would not say I am at "expert" in everything, just know
          the basic of everything and very comfortable with a few. The most
          comfortable tools that I am using are React and Node.js.
        </Text>
      </Box>
    </Flex>
  );
}
