import styled from "styled-components";

const TitleSite = styled.h2`
  color: #3058a4;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  gap: 10px;
  line-height: 16px;
`;

const FormDomain = styled.form`
  width: 100%;
  .form_group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      border: 2px solid #3058a4;
      outline: none;
      padding: 13px 8px;
      width: 100%;
    }
    label {
      color: #3058a4;
      font-weight: 600;
    }
  }
  .form_group_button {
    display: flex;
    flex-direction: row;
    &.center {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    button {
      background: linear-gradient(89.97deg, #3058a4 0.44%, #2964d3 99.97%);
      border-radius: 0.75rem;
      border: none;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-weight: 600;
      padding: 1rem 4rem;
    }
  }
`;

export { FormDomain, TitleSite };
