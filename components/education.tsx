import {
  Grid,
  Heading,
  Stack,
  Center,
  Text,
  Divider,
  Link,
  Container,
  Box,
} from "@chakra-ui/react";
import data from "./education.json";
import Dot from "./dot";

const Education = () => (
  <Center bg="blue.900">
    <Container maxW="1400px" py={{ base: 8, lg: 20 }} px={{ base: 5, lg: 8 }}>
      <Heading mb={8}>
        {data.heading}
        <Dot />
      </Heading>
      <Stack spacing={5} p={{ base: 5, md: 8 }} bg="blue.800" borderRadius={8}>
        {data.items.map((item, index) => {
          const isLast = index !== data.items.length - 1;
          return (
            <Box key={index}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                <Stack spacing={0.5}>
                  <Text fontWeight="bold" color="white">
                    Stanford University
                  </Text>
                  <Link color="blue.600" href={item.url} isExternal>
                    {item.url}
                  </Link>
                  <Text color="gray.400">{item.location}</Text>
                  <Text color="gray.400">{item.date}</Text>
                </Stack>
                <Stack spacing={0.5}>
                  <Text fontWeight="bold" color="white">
                    Description
                  </Text>
                  <Text color="gray.400">{item.description}</Text>
                </Stack>
              </Grid>
              {isLast && (
                <Divider
                  mt={3}
                  borderBottomWidth={3}
                  borderBottomColor="blue.900"
                />
              )}
            </Box>
          );
        })}
      </Stack>
    </Container>
  </Center>
);

export default Education;
