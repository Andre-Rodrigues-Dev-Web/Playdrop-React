import { Link } from "react-router-dom";
import { Playdrop } from "../Logo";
import React from "react";
import { TopoContainer } from "./style";

const TopoAuth = (propsTopAuth) => {
  return (
    <>
      <TopoContainer>
        <div className="container">
          <Playdrop colorLogo="#3058A4" heightLogo="46px" widthLogo="176px" />
          <Link to="/">{propsTopAuth.TextButtonAuth}</Link>
        </div>
      </TopoContainer>
    </>
  );
};

export default TopoAuth;
