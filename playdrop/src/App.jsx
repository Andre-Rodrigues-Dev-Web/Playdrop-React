import Sidebar from "./components/shared/Sidebar";
import { Theme } from "./components/shared/Theme/style";
import { Routes, Route } from "react-router-dom";
// pages
import Login from "./components/pages/Login";
import RecoveryPass from "./components/pages/Recovery";
import Home from "./components/pages/Home";
import EditPass from "./components/pages/EditPass";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" exact element={<Login />} />
          <Route path="/recuperar-senha" exact element={<RecoveryPass />} />
        </Route>
        <Route>
          <Route
            index
            path="/home"
            element={
              <Theme backgroundColor="#fff">
                <Sidebar />
                <Home />
              </Theme>
            }
          />
          <Route
            path="/editpass"
            element={
              <Theme backgroundColor="#fff">
                <Sidebar />
                <EditPass />
              </Theme>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
