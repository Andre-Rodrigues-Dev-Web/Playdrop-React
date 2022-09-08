import { Link } from "react-router-dom";
import { Playdrop } from "../Logo";
import React from "react";
import { TopoContainer } from "./style";

<<<<<<< Updated upstream
const TopoAuth = () => {
=======
const TopoAuth = (propsTopAuth) => {
>>>>>>> Stashed changes
  return (
    <>
      <TopoContainer>
        <div className="container">
          <Playdrop colorLogo="#3058A4" heightLogo="46px" widthLogo="176px" />
<<<<<<< Updated upstream
=======
          <Link to="/">{propsTopAuth.TextButtonAuth}</Link>
>>>>>>> Stashed changes
        </div>
      </TopoContainer>
    </>
  );
};

export default TopoAuth;
