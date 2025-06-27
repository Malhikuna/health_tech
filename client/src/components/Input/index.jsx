import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, name, placeholder, className,classNameInput, onChange, value } = props;
  return (
    <div className={`mb-2 ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classNameInput}
        onChange={onChange}
        value={value}
      ></Input>
    </div>
  );
};

export default InputForm;
