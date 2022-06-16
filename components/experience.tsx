import {
  Center,
  Heading,
  Grid,
  Text,
  Box,
  Container,
  HStack,
  Stack,
  VStack,
  useToken,
  Link,
  Icon,
  Divider,
  Circle,
} from "@chakra-ui/react";
import { HiMinusSm } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import data from "./experience.json";
import Dot from "./dot";

const Experience = () => {
  const [blue600] = useToken("colors", ["blue.600"]);
  return (
    <Center bg="blue.800">
      <Container maxW="1400px" py={20} px={8}>
        <Heading mb={8}>
          {data.heading}
          <Dot />
        </Heading>
        <Grid templateColumns="1fr 2fr" gap={10} w="100%">
          <Stack spacing={3}>
            <HStack spacing={3}>
              <Text fontSize="56px" fontWeight="bold" color="blue.600">
                {data.years}
              </Text>
              <Text color="gray.400" fontWeight="bold">
                Years
                <br /> of Experience
              </Text>
            </HStack>
            <Text color="white" fontWeight="bold">
              Languages spoken:
            </Text>
            <Stack spacing={2} color="gray.400">
              {data.languages.map((item, index) => (
                <Box key={index} pos="relative">
                  <Box pos="absolute" top={1}>
                    <HiMinusSm fontSize="14px" color={blue600} />
                  </Box>
                  <Text fontWeight="bold" ml={5}>
                    {item}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Stack>
          <Box pos="relative" pl={12}>
            <Box
              pos="absolute"
              left={2}
              top={0}
              h="100%"
              w="px"
              bg="gray.400"
            />
            {data.items.map((item, index) => {
              const isLast = index !== data.items.length - 1;
              return (
                <VStack
                  pos="relative"
                  align="left"
                  p={8}
                  bg="blue.900"
                  borderRadius={8}
                  spacing={2}
                  key={index}
                  mb={isLast ? 8 : 0}
                >
                  <Circle
                    pos="absolute"
                    left={-12}
                    top={0}
                    size="4"
                    bg="gray.400"
                  />
                  <Text color="white">{item.date}</Text>
                  <Text color="white">{item.position}</Text>
                  <Link
                    w="fit-content"
                    color="blue.600"
                    display="flex"
                    alignItems="center"
                    href={item.url}
                    isExternal
                  >
                    <ExternalLinkIcon mr={1} /> {item.url}
                  </Link>
                  <HStack spacing={1} color="white">
                    <Icon as={GoLocation} />
                    <Text>{item.location}</Text>
                  </HStack>
                  <Divider borderBottomWidth={1} borderBottomColor="gray.400" />
                  <Text color="gray.400" align="justify">
                    {item.text}
                  </Text>
                </VStack>
              );
            })}
          </Box>
        </Grid>
      </Container>
    </Center>
  );
};

export default Experience;
