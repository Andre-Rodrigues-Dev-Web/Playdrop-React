import { Col, Row } from "../../shared/Grids/style";

import { ButtonOrange } from "../../shared/Buttons/style";
import { CardMidia } from "./style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { IconChat } from "../../shared/Icons";
import { Link } from "react-router-dom";
import React from "react";
import { Title } from "../../shared/Texts/style";

const Midias = () => {
  return (
    <Content>
      <ContainerContent>
        <Row>
          <Col md="12">
            <Title colorTitle="#3058A4" fontSize="24px">
              <IconChat
                colorChat="#3058A4"
                heightChat="24px"
                widthChat="24px"
              />
              Mídias Sociais
            </Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              convallis turpis at varius tincidunt. Morbi aliquet efficitur
              purus, id condimentum leo blandit at.
            </p>
          </Col>
          <Col md="4" xs="12">
            <CardMidia>
              <div className="card_header">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/d56e68112737803.Y3JvcCw4MDgsNjMyLDAsMA.png"
                  alt="social-imagem"
                />
              </div>
              <div className="card_body">
                <h2>Teste</h2>
                <p>12</p>
              </div>
              <div className="form_footer">
                <ButtonOrange>
                  <Link to="/">Mais detalhes</Link>
                </ButtonOrange>
              </div>
            </CardMidia>
          </Col>
        </Row>
      </ContainerContent>
    </Content>
  );
};

export default Midias;
