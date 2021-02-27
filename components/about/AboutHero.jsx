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
        variant="display"
        sx={{ fontSize: [6, 8, 8], textAlign: "center" }}
      >
        Narudom
        <br />
        Techaval
      </Heading>
      <Text mt={3} color="gray" sx={{ fontSize: [3, 4, 4] }}>
        Software Engineer
      </Text>
      <Flex my={3}>
        <Link
          sx={{ color: "gray" }}
          href="https://github.com/bapairaew"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github ↗
        </Link>
        <Text mx={2}> · </Text>
        <Link
          sx={{ color: "gray" }}
          href="https://www.linkedin.com/in/ntechaval/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </Link>
        <Text mx={2}> · </Text>
        <Link sx={{ color: "gray" }} href="mailto:iam@bapairaew.com">
          Email ↗
        </Link>
        <Text mx={2}> · </Text>
        <Link sx={{ color: "gray" }} href="/cv.pdf" target="_blank">
          CV ↗
        </Link>
      </Flex>
      <Box mt={6} px={3} variant="layout.text">
        <Text as="p" my={3}>
          I am a software engineer who enjoy getting involved in the whole
          product development life cycle from ideating, designing and coding. I
          have chosen this career path because I want to build things that bring
          values and make impacts to people's life.
        </Text>
        <Text as="p" my={3}>
          I consider myself pragmatic, flexibile, and open-minded which pushes
          me to learn new things especially in software engineering area to be
          able to pick the most suitable tool once opportunity arises.
        </Text>
        <Text as="p" my={3}>
          I have been moving around a few countries while working and studying.
          I enjoy experiencing different environments and meeting new people
          which is why I started traveling the world.
        </Text>
      </Box>
    </Flex>
  );
}
