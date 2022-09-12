import { Input, InputGroup } from "./style";

import FloatingLabelInput from "react-floating-label-input";
import React from "react";

const InputEmail = ({ value }) => {
  return (
    <Input>
      <FloatingLabelInput id="email" label="Digite seu email" value={value} />
    </Input>
  );
};
const InputPass = (propsLabel, onChange, value) => {
  return (
    <Input>
      <FloatingLabelInput
        id="pass"
        label={propsLabel.textLabel}
        value={value}
      />
    </Input>
  );
};
const InputText = (propsInputLabel) => {
  return (
    <Input>
      <FloatingLabelInput id="texto" label={propsInputLabel.LabelText} />
    </Input>
  );
};
const InputSenha = ({ onChange, value }) => {
  return (
    <InputGroup>
      <FloatingLabelInput id="pass2" label="Digite sua senha" value={value} />
    </InputGroup>
  );
};

export { InputText, InputEmail, InputPass, InputSenha };
