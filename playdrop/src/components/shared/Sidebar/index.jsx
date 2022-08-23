import React from "react";
import { ContainerSidebar, Links, Logo, MenuDesktop } from "./style";
import { Playdrop } from "../Logo";
import { NavLink } from "react-router-dom";
import {
  IconBox,
  IconChat,
  IconDollar,
  IconGrid,
  IconLayout,
  IconSuitcase,
  IconTrophy,
  IconUser,
  IconWorld,
} from "../Icons";

export default function Sidebar() {
  return (
    <ContainerSidebar widthSidebar="300px">
      <MenuDesktop>
        <Logo>
          <Playdrop colorLogo="#3058A4" heightLogo="46px" widthLogo="176px" />
        </Logo>
        <Links>
          <NavLink
            to="home"
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconGrid colorGrid="#3058A4" heightGrid="24px" widthGrid="24px" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="editpass"
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
            to=""
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
            to=""
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconChat colorChat="#3058A4" heightChat="24px" widthChat="24px" />
            <span>Mídias Sociais</span>
          </NavLink>
          <NavLink
            to=""
            className={(navData) => (navData.isActive ? "active" : "disable")}
          >
            <IconUser colorUser="#3058A4" heightUser="24px" widthUser="24px" />
            <span>Fornecedores</span>
          </NavLink>
          <NavLink
            to=""
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
            to=""
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
