import React from "react";
import { IconBell } from "../Icons";
import { ContainerTopo } from "./style";
import { Link } from "react-router-dom";
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
            <img src={phone} alt="icone-phone" />
          </span>
        </Link>
      </ul>
    </ContainerTopo>
  );
};

export default TopoDashboard;
