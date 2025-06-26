import React from 'react'

const Button = (props) => {
  const {children, className, type} = props;
  return (
    <button type={type} className={`bg-[#003732] text-white p-3 rounded-3xl ${className}`}>
      {children}
    </button>
  )
}

export default Button
