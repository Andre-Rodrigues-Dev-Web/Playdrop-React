import { Input, InputGroup } from "./style";

import FloatingLabelInput from "react-floating-label-input";
import React from "react";

const InputEmail = ({ onChange, value }) => {
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
        id="email"
        label={propsLabel.textLabel}
        value={value}
      />
    </Input>
  );
};
const InputSenha = ({ onChange, value }) => {
  return (
    <InputGroup>
      <FloatingLabelInput id="email" label="Digite sua senha" value={value} />
    </InputGroup>
  );
};

export { InputEmail, InputPass, InputSenha };
