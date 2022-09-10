import styled from "styled-components";

const ModalBody = styled.div`
  margin-top: 40px;
  position: relative;
`;
const ModalHeader = styled.div`
  position: relative;
  .bt_close_modal {
    background-color: #2978d3;
    border: none;
    color: #fff;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    top: -10px;
  }
`;

export { ModalBody, ModalHeader };
