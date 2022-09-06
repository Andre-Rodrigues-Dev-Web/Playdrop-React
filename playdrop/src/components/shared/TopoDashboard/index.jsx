import React from "react";
import { IconBell, IconCog, IconPhone } from "../Icons";
import { ContainerTopo } from "./style";
import { Link } from "react-router-dom";
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
            <IconCog colorCog="#3058A5" heightCog="28px" widthCog="28px" />
          </span>
        </Link>
        <Link to="/">
          <span>
            <img src={phone} alt="ícone-phone" />
          </span>
        </Link>
      </ul>
    </ContainerTopo>
  );
};

export default TopoDashboard;
