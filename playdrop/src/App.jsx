import { Route, Routes } from "react-router-dom";

import EditPass from "./components/pages/EditPass";
import EditProfile from "./components/pages/EditProfile";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MenuMobile from "./components/shared/MenuMobile";
import MeusSites from "./components/pages/MeusSites";
import Midias from "./components/pages/Midias";
import NewPass from "./components/pages/NewPass";
import RecoveryPass from "./components/pages/Recovery";
import Sidebar from "./components/shared/Sidebar";
import { Theme } from "./components/shared/Theme/style";
import { isMobile } from "react-device-detect";

// pages
const ViewMenu = () => {
  if (isMobile) {
    return <MenuMobile />;
  } else {
    return <Sidebar />;
  }
};
//Return
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" exact element={<Login />} />
          <Route path="/recuperar-senha" exact element={<RecoveryPass />} />
          <Route path="/nova-senha" exact element={<NewPass />} />
        </Route>
        <Route>
          <Route
            index
            path="/home"
            element={
              <Theme backgroundColor="#fff">
                {ViewMenu()}
                <Home />
              </Theme>
            }
          />
          <Route
            path="/editar-perfil"
            element={
              <Theme backgroundColor="#fff">
                {ViewMenu()}
                <EditProfile />
              </Theme>
            }
          />
          <Route
            path="/alterar-senha"
            element={
              <Theme backgroundColor="#fff">
                {ViewMenu()}
                <EditPass />
              </Theme>
            }
          />
          <Route
            path="/meus-sites"
            element={
              <Theme backgroundColor="#fff">
                {ViewMenu()}
                <MeusSites />
              </Theme>
            }
          />
          <Route
            path="/midias-sociais"
            element={
              <Theme backgroundColor="#fff">
                {ViewMenu()}
                <Midias />
              </Theme>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
