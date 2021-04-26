import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { FC } from "react";
import "typeface-poppins";

const Noop: FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }) {
  const Layout: FC = (Component as any).Layout || Noop;

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
