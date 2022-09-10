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

export { ButtonBlue };
