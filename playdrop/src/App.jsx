<<<<<<< Updated upstream
import Sidebar from "./components/shared/Sidebar";
import { Content, Theme } from "./components/shared/Theme/style";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import EditPass from "./components/pages/EditPass";
=======
import { Route, Routes } from "react-router-dom";

import EditPass from "./components/pages/EditPass";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MenuMobile from "./components/shared/MenuMobile";
import MeusSites from "./components/pages/MeusSites";
import NewPass from "./components/pages/NewPass";
import RecoveryPass from "./components/pages/Recovery";
import Sidebar from "./components/shared/Sidebar";
import { Theme } from "./components/shared/Theme/style";
import { isMobile } from "react-device-detect";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <Theme backgroundColor="#E5E5E5">
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="editpass" element={<EditPass />} />
        </Routes>
      </Content>
    </Theme>
=======
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
            path="/editpass"
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
        </Route>
      </Routes>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
