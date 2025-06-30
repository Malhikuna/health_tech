import React from 'react'

const Button = (props) => {
  const {children, className, type, onClick} = props;
  return (
    <button onClick={onClick} type={type} className={`bg-[#003732] text-white p-3 rounded-3xl ${className}`}>
      {children}
    </button>
  )
}

export default Button
