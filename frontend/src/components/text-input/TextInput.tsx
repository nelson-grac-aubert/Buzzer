import { useId } from "react";
import styles from './TextInput.module.css'

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string
  hint?: string
  maxLength?: number
}

function TextInput({label, value, onChange, placeholder, hint, maxLength}: TextInputProps) {
  const id = useId()

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>

      <input
        id = {id}
        type="text"
        className={styles.field}
        value = {value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        maxLength = {maxLength}
      />

      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}

export default TextInput
