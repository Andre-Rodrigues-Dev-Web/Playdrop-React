import React from "react";
import FloatingLabelInput from "react-floating-label-input";
import { Input, InputGroup } from "./style";
const InputEmail = ({ onChange, value }) => {
  return (
    <Input>
      <FloatingLabelInput id="email" label="Digite seu email" value={value} />
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

export { InputEmail, InputSenha };
