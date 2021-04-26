import { FC } from "react";
import { Footer, Navigation } from "@components/core";

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
