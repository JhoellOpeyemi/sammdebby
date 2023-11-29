import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import ScrollToTop from "../ScrollToTop";

import { AppContextProvider } from "../context/AppContext";

const Root = () => {
  return (
    <AppContextProvider>
      <>
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </>
    </AppContextProvider>
  );
};

export default Root;
