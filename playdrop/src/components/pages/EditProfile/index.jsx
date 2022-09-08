import { Col, Row } from "../../shared/Grids/style";

import React from "react";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
const EditProfile = () => {
  return (
    <ContainerProfile>
      <Row>
        <h2>Editar Perfil</h2>
      </Row>
      <form>
        <Row>
          <Col md="12">
            <h2>Dados de acesso</h2>
          </Col>
          <Col md="12">
            <input type="text" name="" placeholder="E-mail de acesso" />
          </Col>
          <Col md="12">
            <input type="text" name="" placeholder="Nome" />
          </Col>
          <Col md="12">
            <h2>Dados de endereço</h2>
          </Col>
          <Col md="4">
            <InputGroup />
          </Col>
          <Col md="5">
            <a href="">Não lembra o CEP, clique aqui</a>
          </Col>
          <Col md="12">
            <input type="text" name="" placeholder="Endereço" />
          </Col>
          <Col md="4">
            <input type="text" name="" placeholder="N°" />
          </Col>
          <Col md="8">
            <input type="text" name="" placeholder="Complemento" />
          </Col>
          <Col md="6">
            <input type="text" name="" placeholder="Estado" />
          </Col>
          <Col md="6">
            <input type="text" name="" placeholder="Cidade" />
          </Col>
        </Row>
      </form>
    </ContainerProfile>
  );
};

export default EditProfile;
