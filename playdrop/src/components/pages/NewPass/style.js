import styled from "styled-components";

const ContentRecovery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    text-align: center;
    width: 72%;
    button {
      width: 350px;
      a,
      a:hover {
        color: #fff;
        text-decoration: none;
      }
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
    margin: 0 auto;
    padding: 1em 0;
  }
`;

export { ContentRecovery };
