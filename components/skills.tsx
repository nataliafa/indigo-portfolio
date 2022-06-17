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
  Flex,
} from "@chakra-ui/react";
import data from "./skills.json";
import Icon from "./icon";
import Dot from "./dot";

const Skills = () => (
  <Center bg="blue.900">
    <Container>
      <Stack spacing={8}>
        <Heading>
          {data.heading}
          <Dot />
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          {data.cards.map((item, index) => (
            <Stack
              key={index}
              spacing={4}
              p={{ base: 5, md: 8 }}
              bg="blue.800"
              borderRadius={8}
            >
              <HStack color="gray.100">
                <Icon name="BiCodeAlt" fontSize="22px" />
                <Heading as="h3" size="sm">
                  {item.heading}
                </Heading>
              </HStack>
              <Stack spacing={1} color="gray.400">
                {item.text.map((item, index) => (
                  <Box key={index} pos="relative">
                    <Box pos="absolute" top={1}>
                      <Icon name="HiMinusSm" fontSize="14px" />
                    </Box>
                    <Text ml={5}>{item}</Text>
                  </Box>
                ))}
              </Stack>
            </Stack>
          ))}
        </Grid>
        <Flex flexWrap="wrap" justifyContent="center" gap={6} color="gray.400">
          {data.icons.map((item, index) => (
            <VStack key={index} w="90px">
              <Icon name={item.iconName} fontSize="70px" />
              <Text fontWeight="bold">{item.text}</Text>
            </VStack>
          ))}
        </Flex>
      </Stack>
    </Container>
  </Center>
);

export default Skills;
