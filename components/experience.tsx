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
  Link,
  Divider,
  Circle,
} from "@chakra-ui/react"
import data from "./experience.json"
import Dot from "./dot"
import Icon from "./icon"

const Experience = () => (
  <Center bg="blue.800">
    <Container>
      <Heading mb={8}>
        {data.heading}
        <Dot />
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={10} w="100%">
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
                <Box pos="absolute" top={1} color="blue.600">
                  <Icon name="HiMinusSm" fontSize="14px" />
                </Box>
                <Text fontWeight="bold" ml={5}>
                  {item}
                </Text>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Box pos="relative" pl={12}>
          <Box pos="absolute" left={2} top={0} h="100%" w="px" bg="gray.400" />
          {data.items.map((item, index) => {
            const isLast = index !== data.items.length - 1
            return (
              <Stack
                key={index}
                pos="relative"
                p={{ base: 4, md: 8 }}
                mb={isLast ? 8 : 0}
                spacing={2}
                bg="blue.900"
                borderRadius={8}
              >
                <Circle
                  pos="absolute"
                  left={-12}
                  top={0}
                  size="4"
                  bg="gray.400"
                />
                <Text fontWeight="bold" color="white">
                  {item.date}
                </Text>
                <Text fontWeight="bold" color="white">
                  {item.position}
                </Text>
                <Link
                  w="fit-content"
                  color="blue.600"
                  href={item.url}
                  isExternal
                >
                  {item.url}
                </Link>
                <HStack spacing={1} color="white">
                  <Icon name="GoLocation" />
                  <Text>{item.location}</Text>
                </HStack>
                <Divider borderBottomWidth={1} borderBottomColor="gray.400" />
                <Text color="gray.400" align="justify">
                  {item.text}
                </Text>
              </Stack>
            )
          })}
        </Box>
      </Grid>
    </Container>
  </Center>
)

export default Experience
