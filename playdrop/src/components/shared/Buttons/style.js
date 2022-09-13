import styled from "styled-components";

const ButtonBlue = styled.button`
  background: linear-gradient(89.97deg, #3058a4 0.44%, #2978d3 99.97%);
  border: none;
  color: #fff;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  padding: 20px 40px;
  text-align: center;
  a,
  a:hover {
    color: #fff;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    font-size: 1.2em;
  }
  @media (min-width: 1400px) and (max-width: 1500px) {
    font-size: 1.2em;
  }
`;
const ButtonOrange = styled.a`
  background: linear-gradient(89.97deg, #fb8a03 0.44%, #ffb052 99.97%);
  border: 0.851948px solid #eeeeee;
  box-shadow: 0px 12.7792px 9.37143px -1.7039px #e6eeff;
  border-radius: 8.51948px;
  color: #fff;
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  padding: 13px 3em;
`;
export { ButtonBlue, ButtonOrange };
