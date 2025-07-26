import { useGlobal } from "../../../../hooks/useGlobal";
import PacientesInfo from "./PacientesInfo";
import PacientesInfoDesktop from "./PacientesInfoDesktop";

const PacientesInfoView = () => {
  // const { isDesktop } = useGlobal(); // ✅ Tomamos el estado global
  const { desktopView } = useGlobal();

  return desktopView ? <PacientesInfoDesktop /> : <PacientesInfo />;
};

export default PacientesInfoView;
