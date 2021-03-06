import {
  Box,
  Button,
  Heading,
  HStack,
  Center,
  Container,
  Stack,
  Text,
  Grid,
  Link,
  Img,
} from "@chakra-ui/react"
import data from "./about.json"
import Icon from "./icon"

const About = () => (
  <Center bg="blue.800">
    <Container pb={{ base: 8, md: 0 }}>
      <HStack spacing={4} mb={{ base: 6, lg: 0 }}>
        {data.socials.map((item, index) => (
          <Link
            _hover={{ color: "gray.400" }}
            key={index}
            href={item.link}
            isExternal
            color="white"
          >
            <Icon name={item.iconName} fontSize="32px" />
          </Link>
        ))}
      </HStack>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1.5fr 1fr" }}
        gap={{ base: 10, lg: 12 }}
        alignSelf="end"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 420px" }}
          gap={2}
          alignItems="end"
          alignSelf={{ base: "center", lg: "end" }}
          justifySelf="center"
        >
          <Heading
            as="h1"
            size="xl"
            mb={{ base: 4, lg: 10 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {data.fullName}
          </Heading>
          <Box
            w={{ base: "300px", lg: "420px" }}
            h={{ base: "240px", lg: "330px" }}
            overflow="hidden"
          >
            <Img
              w="100%"
              borderRadius="full"
              src={data.image}
              alt={data.imageAlt}
            />
          </Box>
        </Grid>
        <Stack spacing={{ base: 4, lg: 5 }} mb={{ lg: 4 }}>
          <Box pos="relative">
            <Box pos="absolute" top={2} color="gray.400">
              <Icon name="HiMinusSm" fontSize="14px" />
            </Box>
            <Text ml={5} fontSize="xl" color="gray.400">
              Introduction
            </Text>
          </Box>
          <Heading>
            {data.profession}
            <br />
            {data.location}
          </Heading>
          <Text color="gray.400">{data.text}</Text>
          <Button>Download CV</Button>
        </Stack>
      </Grid>
    </Container>
  </Center>
)

export default About
