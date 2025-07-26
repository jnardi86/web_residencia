import RootProvider from './core/providers/RootProvider'
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";
import PopupPacientes from './components/popUp/PopupPacientes';
import PopupInscripcion from './components/popUp/PopupInscripcion';

function App() {

  return (
    <RootProvider>
      {/* <PopupPacientes/> */}
      <PopupInscripcion />
      <RouterProvider router={appRouter} />
    </RootProvider>
  )
}

export default App
