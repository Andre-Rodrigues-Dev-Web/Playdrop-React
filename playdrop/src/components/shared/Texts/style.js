import styled from "styled-components";

const Title = styled.h2`
  color: ${(propsTitle) => propsTitle.colorTitle};
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
  font-size: ${(propsTitle) => propsTitle.fontSize};
  font-style: normal;
  font-weight: 600;
  gap: 5px;
  line-height: 16px;
  margin-bottom: 10px;
`;

export { Title };
