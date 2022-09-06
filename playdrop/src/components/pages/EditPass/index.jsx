import React from "react";
import { FormCrud } from "../../shared/Forms/style";
import { Col, Row } from "../../shared/Grids/style";
import { Content } from "../../shared/Theme/style";

export default function EditPass() {
  return (
    <Content>
      <Row>
        <Col lg="6" md="6" xs="12">
          <FormCrud>input:text</FormCrud>
        </Col>
      </Row>
    </Content>
  );
}
