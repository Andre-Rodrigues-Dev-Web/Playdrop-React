import styled from "styled-components";

const CardSites = styled.div`
  background: #ffffff;
  border: 0.851948px solid #eeeeee;
  box-shadow: 0px 12.7792px 9.37143px -1.7039px #e6eeff;
  border-radius: 0.75rem;
  position: relative;
  .status_site {
    background: #f0f0f0;
    border-radius: 0px 10px 0px 90px;
    content: "";
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    right: 0;
    position: absolute;
    top: 0;
    width: 60px;
    svg {
      position: relative;
      left: 5px;
      top: -5px;
    }
  }
`;
const CardBody = styled.div`
  padding: 2em;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  div {
    padding: 10px 0;
    text-align: center;
    width: 33.33%;
    &:first-child {
      border-bottom: 4px solid #333;
    }
  }
`;

const DataVenc = styled.p`
  color: #3058a4;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
`;

const Id = styled.p`
  color: #3058a4;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
`;

const Load = styled.div`
  ul {
    position: relative;
    &:after {
      background-color: #eee;
      content: "";
      height: 300px;
      position: absolute;
    }
  }
`;

const NameSite = styled.div`
  color: #313131;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
`;

const Url = styled.a`
  color: #3058a4;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
`;
export { Bottom, CardSites, CardBody, Id, DataVenc, Load, NameSite, Url };
