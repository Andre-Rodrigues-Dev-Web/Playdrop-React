<<<<<<< Updated upstream
import React from "react";
import { BigCard, MinCard } from "../../shared/Cards";
import { ContainerContent } from "../../shared/Containers/style";
import { Col, Row } from "../../shared/Grids/style";
import { Title } from "../../shared/Texts/style";
import TopoDashboard from "../../shared/TopoDashboard";
import {
  IconArrowLeft,
  IconBox,
  IconChat,
  IconDownload,
  IconLayout,
  IconWorld,
  PlayOutline,
} from "../../shared/Icons";
import introducaoImg from "../../../assets/posts/como-usar.png";
import wpImg from "../../../assets/posts/wp.png";
import materialApoio from "../../../assets/posts/material-apoio.png";
import parceiros from "../../../assets/posts/parceiros.png";
import listaFornecedores from "../../../assets/posts/lista-fornecedores.png";
import { Content } from "../../shared/Theme/style";
export default function Home() {
  return (
    <Content>
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
          <Col md="6">
            <BigCard
              descriptionCard="Como utilizar a plataforma e os materiais de apoio"
              imgBigCard={<img src={introducaoImg} alt="imagem-introducao" />}
              playCard={<PlayOutline borderPlayOutline="#FB8A03" />}
            />
          </Col>
          <Col md="6">
            <BigCard
              descriptionCard="Como importar templates no Wordpress"
              imgBigCard={<img src={wpImg} alt="imagem-wp" />}
              playCard={<PlayOutline borderPlayOutline="#FB8A03" />}
            />
          </Col>
          <Col md="12">
            <Title colorTitle="#3058A4" fontSize="16px">
              Conheça os conteúdos
            </Title>
          </Col>
          <Col md="4">
            <BigCard
              descriptionCard="Material de apoio de agência"
              imgBigCard={<img src={materialApoio} alt="imagem-wp" />}
              playCard={<IconDownload colorDownload="#FB8A03" />}
            />
          </Col>
          <Col md="4">
            <BigCard
              descriptionCard="Como os parceiros podem ajudar"
              imgBigCard={<img src={parceiros} alt="imagem-wp" />}
              playCard={<IconDownload colorDownload="#FB8A03" />}
            />
          </Col>
          <Col md="4">
            <BigCard
              descriptionCard="Conheça a lista de fornecedores"
              imgBigCard={<img src={listaFornecedores} alt="imagem-wp" />}
              playCard={<IconArrowLeft colorArrowLeft="#FB8A03" />}
            />
          </Col>
        </Row>
      </ContainerContent>
    </Content>
  );
}
