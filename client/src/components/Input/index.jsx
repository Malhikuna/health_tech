import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, name, placeholder, className, onChange, value } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      ></Input>
    </div>
  );
};

export default InputForm;
