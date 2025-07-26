import React, { useEffect, useState } from "react";
import NavDesktop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";
import { useGlobal } from "../../hooks/useGlobal";

const Navbar = () => {
  const { mobileView } = useGlobal();

  return <div>{mobileView ? <NavMobile /> : <NavDesktop />}</div>;
};

export default Navbar;
