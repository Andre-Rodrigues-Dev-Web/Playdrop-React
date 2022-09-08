import styled from "styled-components";

const ContainerMenu = styled.div`
  padding: 20px 0;
  width: 100%;
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  div {
    width: 200px;
  }
  .list_actions {
    a {
      padding: 0 10px;
      &:last-child {
        padding-right: 0px;
      }
      img {
        height: 23px;
        width: 23px;
      }
    }
  }
`;
const StyledMenu = styled.nav`
  background-color: rgb(48 88 164/1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  top: 7em;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 90%;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 1rem 0;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 20px;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
    span {
      color: #fff;
      margin-left: 10px;
    }
  }
`;
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 32px;
    height: 4px;
    background: ${({ open }) => (open ? "#0D0C1D" : "#000")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const TopMenuResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export {
  ContainerMenu,
  ContainerButton,
  StyledMenu,
  StyledBurger,
  TopMenuResponsive,
};
