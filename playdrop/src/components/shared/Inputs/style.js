import styled from "styled-components";

const Input = styled.div`
  border: 2px solid #3058a4;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  div {
    border: none !important;
    label {
      background-color: #fff;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14.4706px;
      padding: 3px 15px;
    }
  }
`;
const InputGroup = styled.div`
  border: 2px solid #3058a4;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  div {
    border: none !important;
    label {
      background-color: #fff;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14.4706px;
      padding: 3px 15px;
    }
  }
`;
export { Input, InputGroup };
