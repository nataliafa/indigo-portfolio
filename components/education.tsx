import {
  Box,
  Grid,
  Heading,
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
          <Text as="span" color="cyan.500">
            .
          </Text>
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={6}></Grid>
      </VStack>
    </Center>
  );
};

export default Education;
