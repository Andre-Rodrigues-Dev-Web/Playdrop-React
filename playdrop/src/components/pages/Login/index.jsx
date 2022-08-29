import React from "react";
import FloatingLabelInput from "react-floating-label-input";
import TopoAuth from "../../shared/TopoAuth";
import { Content, Wrap } from "./style";
import { Col, Row } from "../../shared/Grids/style";
import { FormAuth } from "../../shared/Forms/style";
import imgLogin from "../../../assets/decorativos/login.png";
import InputGroup from "../../shared/Inputs";
const Login = ({ onChange, value }) => {
  return (
    <Wrap>
      <TopoAuth />
      <Content>
        <Row>
          <Col lg="6" md="6" xs="6">
            <img src={imgLogin} alt="imagem-login" className="decoration_img" />
          </Col>
          <Col lg="6" md="6" xs="6">
            <FormAuth>
              <FloatingLabelInput
                id="email"
                label="Digite seu Usuário"
                value={value}
              />
              <InputGroup
                idInput="pass"
                labelInput="Digite sua senha"
                valueInput="Senha"
              />
            </FormAuth>
          </Col>
        </Row>
      </Content>
    </Wrap>
  );
};

export default Login;
