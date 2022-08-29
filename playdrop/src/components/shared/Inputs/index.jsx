import React from "react";
import FloatingLabelInput from "react-floating-label-input";
import { ContainerInput } from "./style";
const InputGroup = ({ propsInputGroup, onChange }) => {
  return (
    <ContainerInput>
      <FloatingLabelInput
        id={propsInputGroup.idInput}
        label={propsInputGroup.labelInput}
        value={propsInputGroup.valueInput}
      />
    </ContainerInput>
  );
};

export default InputGroup;
