import type { ComponentStyleConfig } from "@chakra-ui/theme"

const Container: ComponentStyleConfig = {
  variants: {
    responsive: {
      maxW: "1400px",
      pt: { base: 8, lg: 20 },
      pb: { base: 8, lg: 20 },
      pl: { base: 5, lg: 8 },
      pr: { base: 5, lg: 8 },
    },
  },
  defaultProps: {
    variant: "responsive",
  },
}

export default Container
