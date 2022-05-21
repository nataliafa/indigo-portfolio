import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Heading as="h1" color="brand.900">
        About
      </Heading>
      <HStack>
        <VStack>
          <Box h={10} w={10} bg="blue.100" />
          <Box h={10} w={10} bg="blue.200" />
          <Box h={10} w={10} bg="blue.300" />
          <Box h={10} w={10} bg="blue.400" />
          <Box h={10} w={10} bg="blue.500" />
          <Box h={10} w={10} bg="blue.600" />
          <Box h={10} w={10} bg="blue.700" />
          <Box h={10} w={10} bg="blue.800" />
          <Box h={10} w={10} bg="blue.900" />
        </VStack>
        <VStack>
          <Box h={10} w={10} bg="gray.100" />
          <Box h={10} w={10} bg="gray.400" />
        </VStack>
        <VStack>
          <Box h={10} w={10} bg="cyan.300" />
        </VStack>
        <Button colorScheme="blue">Click me</Button>
      </HStack>
    </>
  );
};

export default About;
