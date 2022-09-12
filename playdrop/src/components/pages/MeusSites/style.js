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

//Tabs
const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "lightgray")};
  height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
const ContentTab = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;

export { ContentTab, Tabs, Tab, TitleSite };
