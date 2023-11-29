import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [desktop, setDesktop] = useState(false);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    setDesktop(false);
    if (window.innerWidth >= 1024) {
      setDesktop(true);
    }
  }, []);

  useEffect(() => {
    setTab(false);
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setTab(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{ tab, desktop }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
