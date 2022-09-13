import { AlertDanger, AlertSuccess } from "../../shared/Messagens/style";
import { Col, Row } from "../../shared/Grids/style";
import { Description, Title } from "./style";
import React, { useEffect, useState } from "react";

import { ButtonBlue } from "../../shared/Buttons/style";
import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { FormCrud } from "../../shared/Forms/style";
import { InputPass } from "../../shared/Inputs";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
export default function EditPass() {
  const [senha, setSenha] = useState("");
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });
  const editProduto = async (e) => {
    e.preventDefault();

    await fetch(
      "http://localhost/www/Playdrop-React/api/editar-senha/editar.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senha }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.erro) {
          setStatus({
            type: "error",
            mensagem: responseJson.mensagem,
          });
        } else {
          setStatus({
            type: "success",
            mensagem: responseJson.mensagem,
          });
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          mensagem: "Produto não editado com sucesso, tente mais tarde!",
        });
      });
  };
  return (
    <Content>
      {ViewTopo()}
      <ContainerContent>
        <Row>
          <Col md="12">
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
          </Col>
          <Col lg="6" md="6" xs="12">
            <FormCrud onSubmit={editProduto}>
              <InputPass textLabel="Senha Atual" />
              <InputPass
                textLabel="Nova Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                name="senha"
              />
              <ButtonBlue type="submit">Cadastrar Senha</ButtonBlue>
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
