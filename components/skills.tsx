import {
  Box,
  Grid,
  Heading,
  VStack,
  Center,
  HStack,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { HiMinusSm } from "react-icons/hi";
import data from "./skills.json";
import Icon from "./icon";

const Skills = () => {
  return (
    <Center bg="blue.900">
      <Container maxW="1400px" py={20} px={8}>
        <VStack spacing={8}>
          <Heading alignSelf="self-start" as="h2" color="gray.100">
            {data.heading}
            <Text as="span" color="cyan.500">
              .
            </Text>
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={6}>
            {data.cards.map((item, index) => (
              <Stack
                key={index}
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
                <Stack spacing={1} color="gray.400">
                  {item.text.map((item, index) => (
                    <Box key={index} pos="relative">
                      <Box pos="absolute" top={1}>
                        <HiMinusSm fontSize="14px" />
                      </Box>
                      <Text fontSize="sm" ml={5}>
                        {item}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Grid>
          <HStack color="gray.400" spacing={7} pt={6}>
            {data.icons.map((item, index) => (
              <VStack key={index}>
                <Icon name={item.iconName} fontSize="70px" />
                <Text fontWeight="bold">{item.text}</Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Center>
  );
};

export default Skills;
