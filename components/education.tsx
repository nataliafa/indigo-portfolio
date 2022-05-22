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
import data from "./education.json";

const Education = () => {
  return (
    <Center bg="blue.900">
      <VStack spacing={8} py={20} px={8} maxW="1400px">
        <Heading as="h2" alignSelf="flex-start" color="gray.100">
          {data.heading}
          <chakra.span color="cyan.500">.</chakra.span>
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={6}></Grid>
      </VStack>
    </Center>
  );
};

export default Education;
