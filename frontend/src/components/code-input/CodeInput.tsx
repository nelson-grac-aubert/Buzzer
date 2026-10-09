import { useId } from 'react'
import styles from './CodeInput.module.css'

type CodeInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  hint?: string
  length?: number
}

// One real input receives the typing (backspace and paste work natively),
// the cells only display its letters
function CodeInput({ label, value, onChange, hint, length = 5 }: CodeInputProps) {
  const id = useId()

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>

      <div className={styles.cells}>
        <input
          id={id}
          type="text"
          className={styles.input}
          value={value}
          maxLength={length}
          // uppercase letters only: "kz-p 1" becomes "KZP"
          onChange={(event) => onChange(event.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
          autoComplete="off"
          spellCheck={false}
        />

        {Array.from({ length }, (_, index) => (
          // the next cell to fill is the one right after the typed letters
          <span key={index} className={index === value.length ? `${styles.cell} ${styles.active}` : styles.cell}>
            {value[index]}
          </span>
        ))}
      </div>

      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  )
}

export default CodeInput
