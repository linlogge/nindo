import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";

const Noop: FC = ({ children }) => <>{children}</>;

function App({ Component, pageProps }) {
  const Layout: FC = (Component as any).Layout || Noop;

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
