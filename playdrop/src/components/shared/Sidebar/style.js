import styled from "styled-components";

const ContainerSidebar = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  @media (min-width: 768px) {
    width: ${(propsMenu) => propsMenu.widthSidebar};
  }
`;
const Logo = styled.div`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const MenuDesktop = styled.div`
  background-color: #fff;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding-left: 20px;
    padding-top: 30px;
    width: 300px;
  }
`;
const Links = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 260px;
  a {
    border-radius: 10px;
    color: #3058a4;
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 10px;
    position: relative;
    &.active {
      background: #3058a4;
      color: #fff;
      &:after {
        background: #26b1ff;
        border-radius: 0px 10px 10px 0px;
        content: "";
        height: 44px;
        position: absolute;
        width: 10px;
        right: 0;
        top: 0;
      }
      svg {
        path {
          stroke: #26b1ff;
        }
      }
    }
    &.disable {
      background-color: #fff;
      color: #3058a4;
      svg {
        path {
          stroke: #3058a4;
        }
      }
    }
    & > span {
      display: inline-block;
      margin-left: 10px;
    }
  }
`;

export { ContainerSidebar, Logo, Links, MenuDesktop };
