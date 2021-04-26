import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { Head } from "@components/core";
import { FC } from "react";
import "typeface-inter";

const Noop: FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }) {
  const Layout: FC = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
