import styled from "styled-components";

const TopoContainer = styled.div`
  width: 100%;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 10px 0 10px;
    width: 99%;
    a {
      border: 1px solid #3058a5;
      color: #3058a4;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      padding: 17px 20px;
      &:hover {
        background-color: #3058a5;
        color: #fff;
      }
    }
  }
`;

export { TopoContainer };
