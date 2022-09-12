import styled from "styled-components";

const FormProfile = styled.form`
  width: 100%;
  .input_cep {
    background-color: #fff;
    border: 2px solid #3058a4;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      border: none;
      padding: 8px 15px;
      outline: none;
      width: 80%;
    }
  }
`;
const Field = styled.input`
  border: 2px solid #3058a4;
  padding: 13px 15px;
  width: 100%;
`;
const SpaceBlocks = styled.div`
  margin-top: 20px;
`;

export { FormProfile, Field, SpaceBlocks };
