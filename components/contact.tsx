import {
  Center,
  Stack,
  Grid,
  Text,
  Button,
  Container,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Contact = () => (
  <Center bg="blue.500">
    <Container pb={{ base: 32, lg: 48 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <Stack spacing={5}>
          <Text
            fontSize={{ base: "48px", lg: "100px" }}
            fontWeight="bold"
            lineHeight="1.2"
            color="white"
          >
            Let
            <br />
            Us Begin
          </Text>
          <ArrowRightIcon
            fontSize={{ base: "32px", lg: "64px" }}
            color="blue.600"
          />
        </Stack>
        <form action="" method="POST">
          <Stack direction="column" spacing={6}>
            <Input
              name="name"
              type="text"
              placeholder="Your name"
              variant="outline"
              bg="white"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              variant="outline"
              bg="white"
              required
            />
            <Textarea
              name="message"
              placeholder="Your message"
              cols={50}
              rows={4}
              variant="outline"
              bg="white"
              required
            />
            <Button colorScheme="denim" type="submit" color="white">
              Send
            </Button>
          </Stack>
        </form>
      </Grid>
    </Container>
  </Center>
);

export default Contact;
