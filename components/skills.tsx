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
import data from "./skills.json";
import Icon from "./icon";

const Skills = () => {
  return (
    <Center bg="blue.900">
      <VStack spacing={8} py={20} px={8} maxW="1400px">
        <Heading as="h2" alignSelf="flex-start" color="gray.100">
          {data.heading}
          <chakra.span color="cyan.500">.</chakra.span>
        </Heading>
        <Grid templateColumns="1fr 1fr" gap={6}>
          {data.cards.map((item, index) => (
            <VStack
              key={index}
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
              </VStack>
            </VStack>
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
    </Center>
  );
};

export default Skills;