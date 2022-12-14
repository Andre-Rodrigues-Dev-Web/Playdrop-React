import styled from "styled-components";

const Content = styled.div`
  @media (min-width: 768px) {
    width: 90%;
  }
`;

const Theme = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export { Content, Theme };
