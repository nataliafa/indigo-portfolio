import { extendTheme } from "@chakra-ui/react"
import Button from "./components/button"
import Heading from "./components/heading"
import Container from "./components/container"
import colors from "./colors"
import breakpoints from "./breakpoints"

const theme = extendTheme({
  components: {
    Button,
    Heading,
    Container,
  },
  colors,
  breakpoints,
})

export default theme
