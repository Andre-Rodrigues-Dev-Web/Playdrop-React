import styled from "styled-components";

const AlertSuccess = styled.div`
  background: #56a754;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
`;

const AlertDanger = styled.div`
  background: #ffdd86;
  border-radius: 10px;
  color: #bf4635;
  padding: 10px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
`;

export { AlertSuccess, AlertDanger };
