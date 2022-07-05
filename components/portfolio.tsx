import Image from "next/image"
import {
  Center,
  Heading,
  Stack,
  Grid,
  Text,
  Button,
  Container,
} from "@chakra-ui/react"
import data from "./portfolio.json"
import Icon from "./icon"
import Dot from "./dot"

const Portfolio = () => (
  <Center bg="blue.800">
    <Container>
      <Stack spacing={8}>
        <Heading>
          {data.heading}
          <Dot />
        </Heading>
        <Text color="gray.400" align="justify">
          {data.text}
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          gap={16}
        >
          {data.cards.map((item, index) => (
            <Stack key={index} pos="relative" spacing={5} pb={16}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                style={{ borderRadius: "8px" }}
                width={700}
                height={400}
              />
              <Heading as="h3" size="sm">
                {item.heading}
              </Heading>
              <Text align="justify" color="gray.400">
                {item.text}
              </Text>
              <Button
                as="a"
                href={item.link}
                target="_blank"
                pos="absolute"
                bottom={0}
                left={0}
                rightIcon={<Icon name="HiOutlineExternalLink" />}
              >
                Open project
              </Button>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Center>
)

export default Portfolio
