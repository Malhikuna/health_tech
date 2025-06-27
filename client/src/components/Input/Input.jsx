import React from 'react'

const Input = (props) => {
  const {className, placeholder, type, name, onChange, value} = props;
  return (
    <input
      className={`bg-[#42887E] w-full rounded-3xl font-bold p-2 ${className}` }
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      required
    />
  )
}

export default Input
