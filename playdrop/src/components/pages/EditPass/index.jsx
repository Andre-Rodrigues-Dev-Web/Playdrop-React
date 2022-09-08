import { Col, Row } from "../../shared/Grids/style";
import { Description, Title } from "./style";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { FormCrud } from "../../shared/Forms/style";
import { InputPass } from "../../shared/Inputs";
import React from "react";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
export default function EditPass() {
  return (
    <Content>
      {ViewTopo()}
      <ContainerContent>
        <Row>
          <Col lg="6" md="6" xs="12">
            <FormCrud>
              <InputPass textLabel="Senha Atual" />
              <InputPass textLabel="Nova Senha" />
              <ButtonBlue>Cadastrar Senha</ButtonBlue>
            </FormCrud>
          </Col>
          <Col lg="6" md="6" xs="12">
            <Title>Pense na sua segurança e crie uma senha forte.</Title>
            <Description>
              Para sua segurança crie um senha incluindo informações como Letras
              <b> maiusculas, símbolos e números.</b>
            </Description>
          </Col>
        </Row>
      </ContainerContent>
    </Content>
  );
}
