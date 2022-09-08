import { Col, Row } from "../../shared/Grids/style";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { IconWorld } from "../../shared/Icons";
import React from "react";
import Sites from "./Sites";
import { TitleSite } from "./style";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
const MeusSites = () => {
  return (
    <Content>
      {ViewTopo()}
      <ContainerContent>
        <Row>
          <Col md="12">
            <TitleSite>
              <IconWorld
                colorWorld="#3058A5"
                heightWorld="24px"
                widthWorld="24px"
              />
              Meus Sites
            </TitleSite>
          </Col>
          <Col md="8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quis voluptatem tempora magni sequi iste dolores
              voluptas rem dolorem ea expedita beatae harum, rerum placeat est
              velit laboriosam quod nesciunt.
            </p>
          </Col>
          <Col md="4">
            <ButtonBlue>Criar Novo Site</ButtonBlue>
          </Col>
          <Col lg="4" md="6" xs="12">
            <Sites
              NomeSite="Site teste"
              urlSite="teste.com.br"
              idSite="1"
              vencimentoSite="03/12/2023"
            />
          </Col>
        </Row>
      </ContainerContent>
    </Content>
  );
};

export default MeusSites;
