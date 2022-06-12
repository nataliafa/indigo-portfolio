import Image from "next/image";
import { Center, Heading, VStack, Grid, Text, Button } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import data from "./portfolio.json";

const Portfolio = () => {
  return (
    <Center bg="blue.800">
      <VStack spacing={8} py={20} px={8} maxW="1400px" align="left">
        <Heading as="h2" alignSelf="flex-start" color="gray.100">
          {data.heading}
          <Text color="cyan.500">.</Text>
        </Heading>
        <Text color="gray.400" align="justify">
          {data.text}
        </Text>
        <Grid templateColumns="1fr 1fr 1fr" gap={16}>
          {data.cards.map((item, index) => (
            <VStack key={index} pos="relative" align="left" spacing={5} pb={16}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                style={{ borderRadius: "8px" }}
                width={700}
                height={400}
              />
              <Heading as="h3" size="md" color="gray.100">
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
            </VStack>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
};

export default Portfolio;
