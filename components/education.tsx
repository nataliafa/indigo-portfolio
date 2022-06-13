import {
  Grid,
  Heading,
  Stack,
  Center,
  Text,
  Divider,
  Link,
  Container,
} from "@chakra-ui/react";
import data from "./education.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Education = () => {
  return (
    <Center bg="blue.900">
      <Container maxW="1400px" py={20} px={8}>
        <Heading as="h2" mb={8} color="gray.100">
          {data.heading}
          <Text as="span" color="cyan.500">
            .
          </Text>
        </Heading>
        <Stack bg="blue.800" p={10} borderRadius={8} spacing={5}>
          {data.items.map((item, index) => (
            <>
              <Grid templateColumns="1fr 1fr" gap={6}>
                <Stack spacing={0.5}>
                  <Text fontWeight="Bold" color="white">
                    Stanford University
                  </Text>
                  <Link
                    color="blue.600"
                    display="flex"
                    alignItems="center"
                    href={item.url}
                    isExternal
                  >
                    {item.url} <ExternalLinkIcon mx={1} />
                  </Link>
                  <Text color="gray.400">{item.location}</Text>
                  <Text color="gray.400">{item.date}</Text>
                </Stack>
                <Stack spacing={0.5}>
                  <Text fontWeight="Bold" color="white">
                    Description
                  </Text>
                  <Text color="gray.400">{item.description}</Text>
                </Stack>
              </Grid>
              {index !== data.items.length - 1 && (
                <Divider borderBottomWidth={3} borderBottomColor="blue.900" />
              )}
            </>
          ))}
        </Stack>
      </Container>
    </Center>
  );
};

export default Education;
