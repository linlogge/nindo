import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("purple.900", "white")(props),
      background: mode("gray.100", "purple.900")(props),
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

const shadows = {
  outline: "0 0 0 3px rgba(128, 90, 213, 0.6)",
};

const fonts = {
  body: "'Inter', sans-serif",
  heading: "'Inter', serif",
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
