import { ButtonBlue } from "../../shared/Buttons/style";
import { ContentRecovery } from "./style";
import { FormAuth } from "../../shared/Forms/style";
import { IconLock } from "../../shared/Icons";
import { InputPass } from "../../shared/Inputs";
import { Link } from "react-router-dom";
import React from "react";
import TopoAuth from "../../shared/TopoAuth";

const NewPass = ({ onChange, value }) => {
  return (
    <>
      <TopoAuth TextButtonAuth="Efetuar login" />
      <ContentRecovery>
        <FormAuth>
          <IconLock colorLock="#3058A4" heightLock="93px" widthLock="93px" />
          <p>
            Para sua segurança crie um senha incluindo informações como Letras
            maiusculas, símbolos e números.
          </p>
          <InputPass textLabel="Digite uma nova senha" />
          <InputPass textLabel="Confirme sua nova senha" />
          <ButtonBlue>
            <Link to="/">Enviar nova senha</Link>
          </ButtonBlue>
        </FormAuth>
      </ContentRecovery>
    </>
  );
};

export default NewPass;
