import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import colors from "./colors";

const theme = extendTheme({
  components: {
    Button,
  },
  colors,
});

export default theme;
