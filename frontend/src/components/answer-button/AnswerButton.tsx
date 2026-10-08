import type { ReactNode } from 'react'
import CheckIcon from '../icons/CheckIcon'
import CrossIcon from '../icons/CrossIcon'
import styles from './AnswerButton.module.css'

export type AnswerOption = 'a' | 'b' | 'c' | 'd'
export type AnswerState = 'default' | 'selected' | 'validated' | 'correct' | 'wrong' | 'dimmed'

type AnswerButtonProps = {
  option: AnswerOption
  state?: AnswerState
  children: ReactNode // answer text
  onClick?: () => void
}

// the player can only click before validating
const clickableStates: AnswerState[] = ['default', 'selected']

function AnswerButton({ option, state = 'default', children, onClick }: AnswerButtonProps) {
  // no CSS class for "default": filter(Boolean) drops the undefined value
  const className = [styles.answer, styles[option], styles[state]].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={!clickableStates.includes(state)}
    >
      <span className={styles.badge}>{option}</span>
      <span className={styles.label}>{children}</span>
      <Indicator state={state} />
    </button>
  )
}

// right-side square: empty box, check or cross depending on the state
function Indicator({ state }: { state: AnswerState }) {
  switch (state) {
    case 'default':
      return <span className={`${styles.indicator} ${styles.empty}`} />
    case 'selected':
    case 'validated':
      return <span className={`${styles.indicator} ${styles.filled}`}><CheckIcon /></span>
    case 'correct':
      return <span className={styles.indicator}><CheckIcon /></span>
    case 'wrong':
      return <span className={styles.indicator}><CrossIcon /></span>
    case 'dimmed':
      return null
  }
}

export default AnswerButton
