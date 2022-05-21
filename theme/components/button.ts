import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  variants: {
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.500`,
    }),
  },
};

export default Button;
