import styled from "styled-components";

const CardMidia = styled.div`
  background: #ffffff;
  border: 0.830393px solid #eeeeee;
  box-shadow: 0px 12.4559px 9.13432px -1.66079px #e6eeff;
  border-radius: 8.30393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card_body {
    padding: 0.7em 0;
    h2 {
      color: #313131;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
    p {
      color: #595959;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }
  }
  .card_header {
    img {
      border-radius: 7px 7px 0px 0px;
    }
  }
`;

export { CardMidia };
