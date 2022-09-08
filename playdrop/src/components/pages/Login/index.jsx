import { Col, Row } from "../../shared/Grids/style";
import { Content, Wrap } from "./style";
import { InputEmail, InputSenha } from "../../shared/Inputs";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { ButtonBlue } from "../../shared/Buttons/style";
import { FormAuth } from "../../shared/Forms/style";
import TopoAuth from "../../shared/TopoAuth";
import axios from "axios";
import imgLogin from "../../../assets/decorativos/login.png";

const Login = ({ onChange, value }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
      password: user.password,
    };

    // console.log(sendData);

    axios
      .post(
        "http://localhost:8080/www/playdrop/sistema/controllers/login.php",
        sendData
      )
      .then((result) => {
        if (result.data.Status === "200") {
          window.localStorage.setItem("email", result.data.email);
          window.localStorage.setItem(
            "userName",
            result.data.first_name + " " + result.data.first_name
          );
          navigate(`/dashboard`);
        } else {
          //props.history.push('/Dashboard')
          //props.history.push('/Dashboard') Redirect

          alert("Dados Inválidos");
        }
      });
  };
  return (
    <Wrap>
      <TopoAuth TextButtonAuth="Sou novo aqui, criar conta" />
      <Content>
        <Row>
          <Col lg="6" md="6" xs="10">
            <img src={imgLogin} alt="imagem-login" className="decoration_img" />
          </Col>
          <Col lg="6" md="6" xs="12">
            <FormAuth onSubmit={submitForm}>
              <h2>Área de Login</h2>
              <InputEmail onChange={handleChange} value={user.email} />
              <InputSenha onChange={handleChange} value={user.password} />
              <ButtonBlue type="submit">Acessar</ButtonBlue>
              <Link to="/recuperar-senha">Esqueci minha senha</Link>
            </FormAuth>
          </Col>
        </Row>
      </Content>
    </Wrap>
  );
};

export default Login;
