import {
  ContainerButton,
  ContainerMenu,
  StyledBurger,
  StyledMenu,
  TopMenuResponsive,
} from "./style";
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
import iconCog from "../../../assets/icons/cog.png";
import iconPhone from "../../../assets/icons/phone.png";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
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
              <Link to="/">Alterar senha</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
//Menu Geral
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink
        to="/home"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconGrid colorGrid="#fff" heightGrid="24px" widthGrid="24px" />
        <span>Dashboard</span>
      </NavLink>
      <DropDownMenu />
      <NavLink
        to="editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconWorld colorWorld="#fff" heightWorld="24px" widthWorld="24px" />
        <span>Meus Sites</span>
      </NavLink>
      <NavLink
        to="/editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconLayout colorLayout="#fff" heightLayout="24px" widthLayout="24px" />
        <span>Meus Templates</span>
      </NavLink>
      <NavLink
        to="/editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconChat colorChat="#fff" heightChat="24px" widthChat="24px" />
        <span>Mídias Sociais</span>
      </NavLink>
      <NavLink
        to="/editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconUser colorUser="#fff" heightUser="24px" widthUser="24px" />
        <span>Fornecedores</span>
      </NavLink>
      <NavLink
        to="/editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconTrophy colorTrophy="#fff" heightTrophy="24px" widthTrophy="24px" />
        <span>Parceiros</span>
      </NavLink>
      <NavLink
        to="/editpass"
        className={(navData) => (navData.isActive ? "active" : "disable")}
      >
        <IconDollar colorDollar="#fff" heightDollar="24px" widthDollar="24px" />
        <span>Planos</span>
      </NavLink>
    </StyledMenu>
  );
};

const MenuMobile = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <ContainerMenu ref={node}>
      <TopMenuResponsive>
        <Playdrop colorLogo="#3058A4" heightLogo="40px" widthLogo="180px" />
      </TopMenuResponsive>
      <ContainerButton>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <ul className="list_actions">
          <Link to="/">
            <img src={iconCog} alt="Icone-cog" />
          </Link>
          <Link to="/">
            <img src={iconPhone} alt="Icone-phone" />
          </Link>
        </ul>
      </ContainerButton>
    </ContainerMenu>
  );
};
const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
export default MenuMobile;
