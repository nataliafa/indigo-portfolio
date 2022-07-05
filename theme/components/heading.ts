import type { ComponentStyleConfig } from "@chakra-ui/theme"

const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: "gray.100",
  },
  sizes: {
    sm: {
      fontSize: ["20px", null, null, "22px"],
    },
    md: {
      fontSize: ["26px", null, null, "36px"],
    },
    xl: {
      fontSize: ["40px", null, null, "70px"],
    },
  },
  defaultProps: {
    size: "md",
  },
}

export default Heading
