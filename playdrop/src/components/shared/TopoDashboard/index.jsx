import { ContainerTopo } from "./style";
import { IconBell } from "../Icons";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
=======
import React from "react";
>>>>>>> Stashed changes
import cog from "../../../assets/icons/cog.png";
import phone from "../../../assets/icons/phone.png";

const TopoDashboard = () => {
  return (
    <ContainerTopo>
      <ul className="actions">
        <Link to="/">
          <span>
            <IconBell colorBell="#3058A5" heightBell="30px" widthBell="38px" />
          </span>
        </Link>
        <Link to="/">
          <span>
            <img src={cog} alt="icone-configurações" />
          </span>
        </Link>
        <Link to="/">
          <span>
<<<<<<< Updated upstream
            <img src={phone} alt="icone-phone" />
=======
            <img src={phone} alt="ícone-phone" />
>>>>>>> Stashed changes
          </span>
        </Link>
      </ul>
    </ContainerTopo>
  );
};

export default TopoDashboard;
