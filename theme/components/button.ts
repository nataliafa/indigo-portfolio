import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  variants: {
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.500`,
      color: `${colorScheme}.900`,
    }),
  },
  defaultProps: {
    colorScheme: "blue",
  },
};

export default Button;
