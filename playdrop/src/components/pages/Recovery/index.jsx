import React from "react";
import { FormAuth } from "../../shared/Forms/style";
import { InputEmail } from "../../shared/Inputs";
import { ContentRecovery } from "./style";
import unlock from "../../../assets/icons/unlock.png";
import { ButtonBlue } from "../../shared/Buttons/style";
const RecoveryPass = () => {
  return (
    <ContentRecovery>
      <FormAuth>
        <img src={unlock} alt="icone-desbloqueio" className="icon-unlock" />
        <p>
          Informe seu e-mail utilizado na plataforma para iniciarmos a criação
          da nova senha.
        </p>
        <InputEmail />
        <ButtonBlue type="submit">Enviar nova senha</ButtonBlue>
      </FormAuth>
    </ContentRecovery>
  );
};

export default RecoveryPass;
