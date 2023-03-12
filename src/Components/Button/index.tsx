import React from 'react'
import './index.scss'

interface ButtonProps {
  color: ButtonColors
  children: React.ReactNode
  onClick: () => void
  height: string
  width: string
}

type ButtonColors =
  | 'play'
  | 'signout'
  | 'google'
  | 'facebook'
  | 'tutorial'
  | 'upgrade'
  | 'github'
  | 'website'

const Button: React.FC<ButtonProps> = ({ color, children, onClick, height, width }) => {
  return (
    <button
      className={`button__back opt-${color}`}
      style={{ height: height, width: width }}
      onClick={() => onClick()}
    >
      <span className={`button__front opt-${color}`}>{children}</span>
    </button>
  )
}

export default Button
