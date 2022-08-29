import React from "react";
import { ContainerContent } from "../../shared/Containers/style";
import { Col, Row } from "../../shared/Grids/style";
import { Title } from "../../shared/Texts/style";
import TopoDashboard from "../../shared/TopoDashboard";
export default function home() {
  return (
    <>
      <TopoDashboard />
      <ContainerContent>
        <Row>
          <Col md="12">
            <Title colorTitle="#3058A4" fontSize="24px" />
          </Col>
          <Col md="12">
            <Title colorTitle="#3058A4" fontSize="24px">
              Bem vindo, André
            </Title>
          </Col>
        </Row>
      </ContainerContent>
    </>
  );
}
