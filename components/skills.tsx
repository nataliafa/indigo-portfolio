import {
  Box,
  Grid,
  Heading,
  chakra,
  VStack,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { HiMinusSm } from "react-icons/hi";

const data = [
  {
    heading: "Java & Kotlin Ecosystem",
    text: ["Spring Boot, Spring Data, Spring Security", "Gradle, Maven"],
  },
  {
    heading: "React, JavaScript and Single Page Applications",
    text: [
      "Experience in creating applications using Vanilla JS, ES6, React (Functional and Class Components, Hooks), JSX, React Router, Virtual DOM",
      "AJAX, Fetch, NPM manager and WebSockets",
    ],
  },
  {
    heading: "Cloud Computing",
    text: ["Google Cloud Platform (GCP) and Firebase", "Amazovn AWS"],
  },
  {
    heading: "Cloud Computing",
    text: [
      "Google Cloud Platform (GCP) and Firebase",
      "Amazovn AWS",
      "Microsoft Azure",
      "Oracle Cloud",
    ],
  },
];

const Skills = () => {
  return (
    <Center bg="blue.900">
      <VStack spacing={8} py={20} px={8} maxW="1400px">
        <Heading as="h2" alignSelf="flex-start" color="gray.100">
          Professional Skills<chakra.span color="cyan.500">.</chakra.span>
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={6}>
          {data.map((item) => (
            <VStack
              align="left"
              spacing={4}
              p={8}
              bg="blue.800"
              borderRadius={8}
            >
              <HStack color="gray.100">
                <BiCodeAlt fontSize="22px" />
                <Heading as="h3" size="md">
                  {item.heading}
                </Heading>
              </HStack>
              <VStack align="left" spacing={1} color="gray.400">
                {item.text.map((item) => (
                  <Box pos="relative">
                    <Box pos="absolute" top={1}>
                      <HiMinusSm fontSize="14px" />
                    </Box>
                    <Text fontSize="sm" ml={5}>
                      {item}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </VStack>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
};

export default Skills;
