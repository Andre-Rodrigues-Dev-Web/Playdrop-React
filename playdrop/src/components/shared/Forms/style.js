import styled from "styled-components";
const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2em 0;
  a {
    color: #3058a4;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    margin-left: 10em;
    width: 400px;
  }
`;

const FormCrud = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2em 0;
`;

export { FormAuth, FormCrud };
