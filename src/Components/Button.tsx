import React from 'react'

export interface ButtonProps {
  size: string
  color: string
  textstyle?: string
  children: React.ReactNode
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ color, children, onClick, size, textstyle }) => {
  return (
    <div className={`relative ${size}`}>
      <div className={`absolute mt-2 rounded-lg brightness-50 ${size} ${color}`}></div>
      <button
        className={`absolute mt-0 flex items-center justify-center gap-1 p-2 font-bold text-text-alt active:mt-1 ${size} ${color} ${textstyle}`}
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
