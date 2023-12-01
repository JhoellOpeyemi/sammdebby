import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import ScrollToTop from "../ScrollToTop";

import { AppContextProvider } from "../context/AppContext";

const Root = () => {
  const [loader, setLoader] = useState(true);

  return (
    <AppContextProvider>
      <AnimatePresence initial={false} mode="wait">
        <ScrollToTop />
        {!loader && <Nav />}
        <Outlet context={[loader, setLoader]} />
        {!loader && <Footer />}
      </AnimatePresence>
    </AppContextProvider>
  );
};

export default Root;
