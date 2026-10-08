import { useId } from "react";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void; 
  hint?: string
  error?: string
  maxLength?: number
}

function TextInput({label, value, onChange, hint, error, maxLength}: TextInputProps) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      
      <input 
        id = {id}
        type="text"
        value = {value}
        onChange={(event) => onChange(event.target.value)}
        maxLength = {maxLength}
      />

      {error ? <p>{error}</p> : hint && <p>{hint}</p>}
    </div>
  )
}

export default TextInput 