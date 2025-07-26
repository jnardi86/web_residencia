import React from "react";
import { HelmetProvider } from "react-helmet-async";
import GlobalProvider from "../../providers/GlobalProvider";
import LanguageProvider from "../../providers/LanguageProvider";

const RootProvider = ({ children }) => {
  return (
    <GlobalProvider>
      <HelmetProvider>
        <LanguageProvider>
            {children}
            </LanguageProvider>
      </HelmetProvider>
    </GlobalProvider>
  );
};

export default RootProvider;
