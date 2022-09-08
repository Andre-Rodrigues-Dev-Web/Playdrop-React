<<<<<<< Updated upstream
import React from "react";
import { MinCard } from "../../shared/Cards";
import { ContainerContent } from "../../shared/Containers/style";
import { Col, Row } from "../../shared/Grids/style";
import { Title } from "../../shared/Texts/style";
import TopoDashboard from "../../shared/TopoDashboard";
import { IconBox, IconChat, IconLayout, IconWorld } from "../../shared/Icons";
export default function home() {
  return (
    <>
      <TopoDashboard />
=======
import { BigCard, MinCard } from "../../shared/Cards";
import { Col, Row, RowCard } from "../../shared/Grids/style";
import {
  IconArrowLeft,
  IconBox,
  IconChat,
  IconDownload,
  IconLayout,
  IconWorld,
  PlayOutline,
} from "../../shared/Icons";

import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import React from "react";
import { Title } from "../../shared/Texts/style";
import TopoDashboard from "../../shared/TopoDashboard";
import introducaoImg from "../../../assets/posts/como-usar.png";
import { isDesktop } from "react-device-detect";
import listaFornecedores from "../../../assets/posts/lista-fornecedores.png";
import materialApoio from "../../../assets/posts/material-apoio.png";
import parceiros from "../../../assets/posts/parceiros.png";
import wpImg from "../../../assets/posts/wp.png";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
export default function Home() {
  return (
    <Content>
      {ViewTopo()}
>>>>>>> Stashed changes
      <ContainerContent>
        <Row>
          <Col className="mb-2" md="12">
            <Title colorTitle="#3058A4" fontSize="24px">
              Bem vindo, André
            </Title>
          </Col>
        </Row>
        <RowCard>
          <Col md="3">
            <MinCard
              iconCard={
                <IconWorld
                  colorWorld="#3058A5"
                  heightWorld="25px"
                  widthWorld="25px"
                />
              }
              textHero="Meus Sites"
              numberCard="02"
            />
          </Col>
          <Col md="3">
            <MinCard
              iconCard={
                <IconLayout
                  colorLayout="#3058A5"
                  heightLayout="25px"
                  widthLayout="25px"
                />
              }
              textHero="Meus Templates"
              numberCard="18"
            />
          </Col>
          <Col md="3">
            <MinCard
              iconCard={
                <IconBox colorBox="#3058A5" heightBox="25px" widthBox="25px" />
              }
              textHero="Cursos"
              numberCard="4"
            />
          </Col>
          <Col md="3">
            <MinCard
              iconCard={
                <IconChat
                  colorChat="#3058A5"
                  heightChat="25px"
                  widthChat="25px"
                />
              }
              textHero="Mídias Sociais"
              numberCard="18"
            />
          </Col>
        </RowCard>
        <Row>
          <Col md="12">
            <Title colorTitle="#3058A4" fontSize="16px">
              Primeiros passos
            </Title>
          </Col>
          <Col md="6"></Col>
        </Row>
      </ContainerContent>
    </>
  );
}
