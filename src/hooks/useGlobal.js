import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
  const { mobileView, desktopView, directoresRef, homeContactoRef, scrollToSection } =
    useContext(GlobalContext);

  return {
    mobileView,
    desktopView,
    directoresRef,
    homeContactoRef,
    scrollToSection,
  };
};
