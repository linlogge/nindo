import { FC } from "react";
import { Header, Footer } from "@components/core";

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
