import styled from "styled-components";

const ContentRecovery = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    width: 99%;
    button {
      width: 400px;
      @media (min-width: 768px) {
        width: 380px;
      }
    }
    div {
      width: 100%;
    }
    p {
      color: #4f4f4f;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
    }
    @media (min-width: 768px) {
      width: 380px;
      div {
        width: 100%;
      }
    }
    .icon-unlock {
      @media (min-width: 768px) {
        height: 77.5px;
        width: 76.38px;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 4em 0;
  }
`;

export { ContentRecovery };
