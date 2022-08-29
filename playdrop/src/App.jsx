import Sidebar from "./components/shared/Sidebar";
import { Theme } from "./components/shared/Theme/style";
import { Routes, Route } from "react-router-dom";
// pages
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import EditPass from "./components/pages/EditPass";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" exact element={<Login />} />
        </Route>
        <Route>
          <Route
            index
            path="/home"
            element={
              <Theme backgroundColor="#E5E5E5">
                <Sidebar />
                <Home />
              </Theme>
            }
          />
          <Route
            path="/editpass"
            element={
              <Theme backgroundColor="#E5E5E5">
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
