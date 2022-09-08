import { ButtonBlue } from "../../shared/Buttons/style";
import { ContentRecovery } from "./style";
import { FormAuth } from "../../shared/Forms/style";
import { InputEmail } from "../../shared/Inputs";
import { Link } from "react-router-dom";
import React from "react";
import TopoAuth from "../../shared/TopoAuth";
import unlock from "../../../assets/icons/unlock.png";

const RecoveryPass = () => {
  return (
    <>
      <TopoAuth TextButtonAuth="Efetuar login" />
      <ContentRecovery>
        <FormAuth>
          <img src={unlock} alt="icone-desbloqueio" className="icon-unlock" />
          <p>
            Informe seu e-mail utilizado na plataforma para iniciarmos a criação
            da nova senha.
          </p>
          <InputEmail />
          <ButtonBlue>
            <Link to="/nova-senha">Enviar nova senha</Link>
          </ButtonBlue>
        </FormAuth>
      </ContentRecovery>
    </>
  );
};

export default RecoveryPass;
