import Image from "next/image";
import {
  Center,
  Heading,
  Stack,
  Grid,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import data from "./portfolio.json";
import Dot from "./dot";

const Portfolio = () => {
  return (
    <Center bg="blue.800">
      <Container maxW="1400px" py={20} px={8}>
        <Stack spacing={8}>
          <Heading>
            {data.heading}
            <Dot />
          </Heading>
          <Text color="gray.400" align="justify">
            {data.text}
          </Text>
          <Grid templateColumns="1fr 1fr 1fr" gap={16}>
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
                <Text fontSize="sm" color="gray.400" align="justify">
                  {item.text}
                </Text>
                <Button
                  as="a"
                  href={item.link}
                  target="_blank"
                  pos="absolute"
                  bottom={0}
                  left={0}
                  width="50%"
                  rightIcon={<HiOutlineExternalLink />}
                >
                  Open project
                </Button>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Center>
  );
};

export default Portfolio;
