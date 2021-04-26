import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("purple.900", "white")(props),
      background: mode("white", "purple.900")(props),
    },
  }),
};

const components = {
  Heading: {
    baseStyle: {},
  },
};

const colors = {};

const radii = {};

const shadows = {};

const fonts = {
  body: "'Poppins', sans-serif",
  heading: "'Poppins', serif",
};

const sizes = {};

const overrides = {
  colors,
  fonts,
  radii,
  shadows,
  components,
  styles,
  sizes,
};

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  ...overrides,
});
