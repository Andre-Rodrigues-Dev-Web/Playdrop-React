import { ContainerSidebar, Links, Logo, MenuDesktop } from "./style";
import {
  IconChat,
  IconDollar,
  IconGrid,
  IconLayout,
  IconSuitcase,
  IconTrophy,
  IconUser,
  IconWorld,
} from "../Icons";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import { Playdrop } from "../Logo";

// DropDownMenu
const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="container" ref={container}>
      <button className="bt_dropdown" onClick={() => setOpen(!open)}>
        <IconSuitcase
          colorSuitcase="#3058A4"
          heightSuitcase="24px"
          widthSuitcase="24px"
        />{" "}
        <span>Meu Perfil</span>
      </button>
      {open && (
        <div class="dropdown-wrapper">
          <ul class="dropdown-menu">
            <li class="dropdown-menu__item">
              <Link to="/">Editar Perfil</Link>
            </li>
            <li class="dropdown-menu__item">
              <Link to="/editpass">Alterar senha</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
//Sidebar
export default function Sidebar() {
  return (
    <ContainerSidebar widthSidebar="300px">
      <MenuDesktop>
        <Logo>
          <Playdrop colorLogo="#3058A4" heightLogo="46px" widthLogo="176px" />
        </Logo>
        <Links>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconGrid colorGrid="#3058A4" heightGrid="24px" widthGrid="24px" />
            <span>Dashboard</span>
          </NavLink>
          <DropDownMenu />
          <NavLink
            to="/meus-sites"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconWorld
              colorWorld="#3058A4"
              heightWorld="24px"
              widthWorld="24px"
            />
            <span>Meus Sites</span>
          </NavLink>
          <NavLink
            to="/editpass"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconLayout
              colorLayout="#3058A4"
              heightLayout="24px"
              widthLayout="24px"
            />
            <span>Meus Templates</span>
          </NavLink>
          <NavLink
            to="/editpass"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconChat colorChat="#3058A4" heightChat="24px" widthChat="24px" />
            <span>Mídias Sociais</span>
          </NavLink>
          <NavLink
            to="/editpass"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconUser colorUser="#3058A4" heightUser="24px" widthUser="24px" />
            <span>Fornecedores</span>
          </NavLink>
          <NavLink
            to="/editpass"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconTrophy
              colorTrophy="#3058A4"
              heightTrophy="24px"
              widthTrophy="24px"
            />
            <span>Parceiros</span>
          </NavLink>
          <NavLink
            to="/editpass"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconDollar
              colorDollar="#3058A4"
              heightDollar="24px"
              widthDollar="24px"
            />
            <span>Planos</span>
          </NavLink>
        </Links>
      </MenuDesktop>
    </ContainerSidebar>
  );
}
