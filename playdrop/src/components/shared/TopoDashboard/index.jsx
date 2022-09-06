import React from "react";
import { IconBell } from "../Icons";
import { ContainerTopo } from "./style";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import cog from "../../../assets/icons/cog.png";
=======
>>>>>>> eb9720efb3ea4b61d91d561d6b84f7698fc4294b
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
<<<<<<< HEAD
            <img src={phone} alt="icone-phone" />
=======
            <img src={phone} alt="ícone-phone" />
>>>>>>> eb9720efb3ea4b61d91d561d6b84f7698fc4294b
          </span>
        </Link>
      </ul>
    </ContainerTopo>
  );
};

export default TopoDashboard;
