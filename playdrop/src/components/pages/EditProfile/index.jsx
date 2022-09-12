import { Col, Row } from "../../shared/Grids/style";
import { Field, FormProfile, SpaceBlocks } from "./style";

import { ContainerContent } from "../../shared/Containers/style";
import { Content } from "../../shared/Theme/style";
import { InputText } from "../../shared/Inputs";
import { Link } from "react-router-dom";
import React from "react";
import { Title } from "../../shared/Texts/style";
import TopoDashboard from "../../shared/TopoDashboard";
import { isDesktop } from "react-device-detect";
import { useForm } from "react-hook-form";

const ViewTopo = () => {
  if (isDesktop) {
    return <TopoDashboard />;
  }
};
const EditProfile = () => {
  // Consulta e validação de CEP
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
    console.log(e);
  };
  return (
    <Content>
      {ViewTopo()}
      <ContainerContent>
        <Row>
          <Col md="12">
            <FormProfile>
              <SpaceBlocks>
                <Row>
                  <Col md="12">
                    <Title colorTitle="#3058A4" fontSize="16px">
                      Editar perfil
                    </Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam convallis turpis at varius tincidunt. Morbi aliquet
                      efficitur purus, id condimentum leo blandit at.
                    </p>
                  </Col>
                  <Col md="12">
                    <Title colorTitle="#3058A4" fontSize="14px">
                      Dados de acesso
                    </Title>
                  </Col>
                  <Col md="12">
                    <InputText LabelText="Email de acesso" />
                  </Col>
                  <Col md="12">
                    <InputText LabelText="Nome" />
                  </Col>
                </Row>
              </SpaceBlocks>
              <SpaceBlocks>
                <Row>
                  <Col md="12">
                    <Title colorTitle="#3058A4" fontSize="14px">
                      Dados de endereço
                    </Title>
                  </Col>
                  <Col md="4" xs="12">
                    <div className="input_cep">
                      <input
                        type="text"
                        placeholder="CEP"
                        {...register("cep")}
                        onBlur={checkCEP}
                      />
                      <button type="button" onClick={checkCEP}>
                        Pesquisar
                      </button>
                    </div>
                  </Col>
                  <Col md="8" xs="12">
                    <Link to="/home">Não lembra o CEP, clique aqui</Link>
                  </Col>
                  <Col md="12">
                    <Field placeholder="Rua" {...register("address")} />
                  </Col>
                  <Col md="4">
                    <Field placeholder="Nº" {...register("addressNumber")} />
                  </Col>
                  <Col md="8">
                    <Field
                      placeholder="Complemento"
                      {...register("neighborhood")}
                    />
                  </Col>
                  <Col md="6">
                    <Field placeholder="Estado" {...register("uf")} />
                  </Col>
                  <Col md="6">
                    <Field placeholder="Cidade" {...register("city")} />
                  </Col>
                </Row>
              </SpaceBlocks>
              <button type="submit">Enviar</button>
            </FormProfile>
          </Col>
        </Row>
      </ContainerContent>
    </Content>
  );
};

export default EditProfile;
