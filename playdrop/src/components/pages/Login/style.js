import styled from "styled-components";

const Content = styled.div`
  display: flex;
  padding: 2em 0;
  position: relative;
  .decoration_img {
    width: 100%;
    @media (min-width: 768px) {
      width: 36vw;
    }
  }
  h2 {
    color: #3058a4;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 40px;
    }
  }
`;
const Wrap = styled.div`
  height: 100vh;
  width: 100%;
`;

export { Content, Wrap };
