import styled from "styled-components";

const ContainerCard = styled.div`
  background: #ffffff;
  border: 0.851948px solid #f5f5f5;
  box-shadow: 0px 12.7792px 9.37143px -1.7039px #e6eeff;
  border-radius: 8.51948px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Poppins", sans-serif;
  padding: 20px;
`;
const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(cardOrientation) => cardOrientation.directionFlexMobile};
  gap: 8px;
  h2 {
    color: #313131;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }
  @media (min-width: 768px) {
    flex-direction: ${(cardOrientation) => cardOrientation.directionFlexDesk};
  }
`;
const CardHeader = styled.div`
  text-align: center;
  h2 {
    color: #3058a4;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  }
`;

export { ContainerCard, CardBody, CardHeader };
