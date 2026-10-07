import type { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode // button content, most likely a label string
  onClick?: () => void 
  disabled?: boolean
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
