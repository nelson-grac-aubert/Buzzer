import type { ReactNode } from 'react'
import styles from "./Button.module.css"

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode // button content, most likely a label string
  onClick?: () => void 
  disabled?: boolean
}

function Button({ variant= 'primary', children, onClick, disabled }: ButtonProps) {
  return (
    <button 
      type="button" 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick} 
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
