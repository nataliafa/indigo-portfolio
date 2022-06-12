import {
  Grid,
  Heading,
  VStack,
  Center,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import data from "./education.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Education = () => {
  return (
    <Center bg="blue.900">
      <VStack align="left" spacing={8} py={20} px={8} maxW="1400px">
        <Heading as="h2" alignSelf="flex-start" color="gray.100">
          {data.heading}
          <Text as="span" color="cyan.500">
            .
          </Text>
        </Heading>
        <VStack align="left" bg="blue.800" p={10} borderRadius={8} spacing={5}>
          {data.items.map((item, index) => (
            <>
              <Grid templateColumns="1fr 1fr" gap={6}>
                <VStack align="left" spacing={0.5}>
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
                </VStack>
                <VStack align="left" spacing={0.5}>
                  <Text fontWeight="Bold" color="white">
                    Description
                  </Text>
                  <Text color="gray.400">{item.description}</Text>
                </VStack>
              </Grid>
              {index !== data.items.length - 1 && (
                <Divider borderBottomWidth={3} borderBottomColor="blue.900" />
              )}
            </>
          ))}
        </VStack>
      </VStack>
    </Center>
  );
};

export default Education;
