import React from "react";
import { Playdrop } from "../Logo";
import { TopoContainer } from "./style";
import { Link } from "react-router-dom";
const TopoAuth = () => {
  return (
    <>
      <TopoContainer>
        <div className="container">
          <Playdrop colorLogo="#3058A4" heightLogo="46px" widthLogo="176px" />
          <Link to="/">Sou novo aqui, criar conta</Link>
        </div>
      </TopoContainer>
    </>
  );
};

export default TopoAuth;
