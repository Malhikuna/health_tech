import React from 'react'

const Input = (props) => {
  const {className, placeholder, type, name, onChange, value, checked} = props;
  return (
    <input
      className={`bg-[#42887E] rounded-3xl font-bold p-2 ${className}` }
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      checked={checked}
      required
    />
  )
}

export default Input
