import { useState } from "react";


export const useForms = () => {
  const [isToggled, setIsToggled] = useState(true);

  const onToggle = () => {
    setIsToggled((previsToggled) => !previsToggled);
  };

  return {
    isToggled,
    setIsToggled,
    onToggle,
  };
};
