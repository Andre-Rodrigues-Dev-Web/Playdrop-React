import "react-tabs/style/react-tabs.css";

import { AlertDanger, AlertSuccess } from "../../shared/Messagens/style";
import { Col, Row } from "../../shared/Grids/style";
import { FormDomain, TitleSite } from "./style";
import { ModalBody, ModalHeader } from "../../shared/Modal/style";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { IconWorld } from "../../shared/Icons";
import { Link } from "react-router-dom";
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

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};

const MeusSites = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //Cadastro de Sites
  const [produto, setProduto] = useState({
    segmento: "",
    modalidade: "",
    dominio: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setProduto({ ...produto, [e.target.name]: e.target.value });

  const cadProduto = async (e) => {
    e.preventDefault();
    //console.log(produto.titulo);

    await fetch("https://app.playdrop.com.br/api/meus-sites/cadastro.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ produto }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        if (responseJson.erro) {
          setStatus({
            type: "erro",
            mensagem: responseJson.messagem,
          });
        } else {
          setStatus({
            type: "success",
            mensagem: responseJson.messagem,
          });
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Site não foi cadastro com sucesso, tente mais tarde!",
        });
      });
  };
  //classes estilo
  const position_center = "center";
  //Lista Sites
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("https://app.playdrop.com.br/api/lista.php")
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setData(responseJson.records)
      );
  };

  useEffect(() => {
    getProdutos();
  }, []);
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
                    {status.type === "erro" ? (
                      <AlertDanger>{status.mensagem}</AlertDanger>
                    ) : (
                      ""
                    )}
                    {status.type === "success" ? (
                      <AlertSuccess>{status.mensagem}</AlertSuccess>
                    ) : (
                      ""
                    )}
                    <FormDomain onSubmit={cadProduto}>
                      <Row>
                        <Col md="12">
                          <div className="form_group">
                            <label htmlFor="nome">
                              Digite o nome de seu site
                            </label>
                            <input
                              type="text"
                              id="nome"
                              placeholder="Nome da sua empresa, blog, ou serviço"
                              name="nome"
                              onChange={valorInput}
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div className="form_group">
                            <label htmlFor="dominio">
                              Exemplo de domínio: www.meusite.com.br
                            </label>
                            <input
                              type="text"
                              id="dominio"
                              placeholder="Domínio"
                              name="dominio"
                              onChange={valorInput}
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
                              name="modalidade"
                              onChange={valorInput}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form_group">
                            <label htmlFor="segmento">
                              Qual o segmento de mercado ex: Petshop
                            </label>
                            <input
                              type="text"
                              id="segmento"
                              placeholder="Segmento"
                              name="segmento"
                              onChange={valorInput}
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            className={`form_group_button ${position_center}`}
                          >
                            <button type="submit">Cadastrar</button>
                          </div>
                        </Col>
                      </Row>
                    </FormDomain>
                  </TabPanel>
                  <TabPanel>
                    <h2>Cadastre-se no Registro.br e obtenha um domínio.</h2>
                    <Link to="https://registro.br/">
                      Clique aqui para registrar um domínio
                    </Link>
                  </TabPanel>
                </Tabs>
              </ModalBody>
            </Modal>
          </Col>
          {Object.values(data).map((produto) => (
            <Col md="6" xs="12">
              <Sites
                NomeSite={produto.nome}
                urlSite={produto.dominio}
                idSite={produto.id}
                vencimentoSite="03/12/2023"
              />
            </Col>
          ))}
        </Row>
      </ContainerContent>
    </Content>
  );
};

export default MeusSites;
