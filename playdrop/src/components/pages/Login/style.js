import styled from "styled-components";

const Content = styled.div`
  display: flex;
  padding: 2em 0;
  .decoration_img {
    width: 100%;
    @media (min-width: 768px) {
      width: 80vw;
    }
  }
`;
const Wrap = styled.div`
  height: 100vh;
  width: 100%;
`;

export { Content, Wrap };
