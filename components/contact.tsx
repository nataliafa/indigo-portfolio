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
    <Container maxW="1400px" pt={20} pb={48} px={8}>
      <Grid templateColumns="1fr 1fr" gap={6}>
        <Stack spacing={5}>
          <Text
            fontSize="100px"
            fontWeight="bold"
            lineHeight="1.2"
            color="white"
          >
            Let
            <br />
            Us Begin
          </Text>
          <ArrowRightIcon fontSize="64px" color="blue.600" />
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
            <Button colorScheme="denim" type="submit" w="50%" color="white">
              Send
            </Button>
          </Stack>
        </form>
      </Grid>
    </Container>
  </Center>
);

export default Contact;
