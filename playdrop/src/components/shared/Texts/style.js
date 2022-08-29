import styled from "styled-components";

const Title = styled.h2`
  color: ${(propsTitle) => propsTitle.colorTitle};
  font-size: ${(propsTitle) => propsTitle.fontSize};
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

export { Title };
