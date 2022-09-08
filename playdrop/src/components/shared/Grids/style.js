import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  div {
    padding: 10px;
    width: 160px;
  }
  @media (min-width: 768px) {
    gap: 45px;
    div {
      padding: 10px;
      width: 299px;
    }
  }
`;

const Col = styled.div`
  box-sizing: border-box;
  padding: 9px 15px;
  width: ${({ xs }) => (xs ? `${(xs / 12) * 100}%` : "100%")};
  @media (min-width: 768px) {
    width: ${({ sm, xs }) =>
      sm ? `${(sm / 12) * 100}%` : xs ? `${(xs / 12) * 100}%` : "100%"};
  }
  @media (min-width: 992px) {
    width: ${({ md, sm, xs }) =>
      md
        ? `${(md / 12) * 100}%`
        : sm
        ? `${(sm / 12) * 100}%`
        : xs
        ? `${(xs / 12) * 100}%`
        : "100%"};
  }
  @media (min-width: 1200px) {
    width: ${({ lg, md, sm, xs }) =>
      lg
        ? `${(lg / 12) * 100}%`
        : md
        ? `${(md / 12) * 100}%`
        : sm
        ? `${(sm / 12) * 100}%`
        : xs
        ? `${(xs / 12) * 100}%`
        : "100%"};
  }
`;
export { Col, Row, RowCard };
