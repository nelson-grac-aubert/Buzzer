import Button from '../button/Button'
import styles from './NumberStepper.module.css'

type NumberStepperProps = {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit?: string
}

function NumberStepper({ label, value, onChange, min, max, step = 1, unit = '' }: NumberStepperProps) {
  return (
    <div className={styles.stepper}>
      <span className={styles.label}>{label}</span>

      <div className={styles.controls}>
        {/* Math.max / Math.min keep the value inside the bounds */}
        <Button variant="secondary" onClick={() => onChange(Math.max(min, value - step))} disabled={value <= min}>
          -
        </Button>

        <span className={styles.value}>{value} {unit}</span>

        <Button variant="secondary" onClick={() => onChange(Math.min(max, value + step))} disabled={value >= max}>
          +
        </Button>
      </div>
    </div>
  )
}

export default NumberStepper
