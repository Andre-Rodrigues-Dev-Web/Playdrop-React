import "react-tabs/style/react-tabs.css";

import { Col, Row } from "../../shared/Grids/style";
import { FormDomain, TitleSite } from "./style";
import { ModalBody, ModalHeader } from "../../shared/Modal/style";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { IconWorld } from "../../shared/Icons";
import Modal from "react-modal";
import Sites from "./Sites";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";

//Tabs

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 780,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};

const MeusSites = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  //Estado das Tabs
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  //classes estilo
  const position_center = "center";
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
            <ButtonBlue onClick={openModal}>Criar Novo Site</ButtonBlue>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ModalHeader>
                <h2>Registro de site</h2>
                <button className="bt_close_modal" onClick={closeModal}>
                  Fechar
                </button>
              </ModalHeader>
              <ModalBody>
                <Tabs>
                  <TabList>
                    <Tab>Possuo domínio</Tab>
                    <Tab>Não possuo domínio</Tab>
                  </TabList>

                  <TabPanel>
                    <FormDomain>
                      <Row>
                        <Col md="12">
                          <div className="form_group">
                            <label htmlFor="dominio">
                              Exemplo de domínio: www.meusite.com.br
                            </label>
                            <input
                              type="text"
                              id="dominio"
                              placeholder="Domínio"
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form_group">
                            <label htmlFor="modalidade">
                              Qual modalidade, Ex: Landing page
                            </label>
                            <input
                              type="text"
                              id="modalidade"
                              placeholder="Modalidade"
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form_group">
                            <label htmlFor="modalidade">
                              Qual o segmento de mercado ex: Petshop
                            </label>
                            <input
                              type="text"
                              id="segmento"
                              placeholder="Segmento"
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            className={`form_group_button ${position_center}`}
                          >
                            <button>Cadastrar</button>
                          </div>
                        </Col>
                      </Row>
                    </FormDomain>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
              </ModalBody>
            </Modal>
          </Col>
          <Col md="6" xs="12">
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
