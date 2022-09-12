import { Col, Row } from "../../shared/Grids/style";
import { ContentTab, Tab, Tabs, TitleSite } from "./style";
import { ModalBody, ModalHeader } from "../../shared/Modal/style";
import React, { useState } from "react";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { IconWorld } from "../../shared/Icons";
import Modal from "react-modal";
import Sites from "./Sites";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
                  close
                </button>
              </ModalHeader>
              <ModalBody>
                <Tabs>
                  <Tab onClick={handleClick} active={active === 0} id={0}>
                    Content1
                  </Tab>

                  <Tab onClick={handleClick} active={active === 1} id={1}>
                    Content2
                  </Tab>
                </Tabs>
                <>
                  <ContentTab active={active === 0}>
                    <h1>Content 1</h1>
                  </ContentTab>
                  <ContentTab active={active === 1}>
                    <h1>Content 2</h1>
                  </ContentTab>
                </>
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
