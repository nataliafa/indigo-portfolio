import { Center, Heading, Grid, Text, Box, Container } from "@chakra-ui/react";
import data from "./experience.json";

const Experience = () => {
  return (
    <Center bg="blue.800">
      <Container maxW="1400px" py={20} px={8}>
        <Heading as="h2" mb={8} color="gray.100">
          {data.heading}
          <Text as="span" color="cyan.500">
            .
          </Text>
        </Heading>
        <Grid templateColumns="1fr 2fr" gap={6} w="100%">
          <Box border="1px solid" borderColor="red.500">
            1
          </Box>
          <Box border="1px solid" borderColor="red.500">
            2
          </Box>
        </Grid>
      </Container>
    </Center>
  );
};

export default Experience;
