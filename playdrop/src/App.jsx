import Sidebar from "./components/shared/Sidebar";
import { Content, Theme } from "./components/shared/Theme/style";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import EditPass from "./components/pages/EditPass";

function App() {
  return (
    <Theme backgroundColor="#E5E5E5">
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="editpass" element={<EditPass />} />
        </Routes>
      </Content>
    </Theme>
  );
}

export default App;
