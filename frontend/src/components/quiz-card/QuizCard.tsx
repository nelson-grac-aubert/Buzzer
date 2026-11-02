import CheckIcon from '../icons/CheckIcon'
import styles from './QuizCard.module.css'

type QuizCardProps = {
  title: string
  questionCount: number
  selected: boolean
  onClick: () => void
}

// The parent decides which card is selected (only one at a time)
function QuizCard({ title, questionCount, selected, onClick }: QuizCardProps) {
  return (
    <button
      type="button"
      className={selected ? `${styles.card} ${styles.selected}` : styles.card}
      onClick={onClick}
    >
      <span className={styles.info}>
        <span>{title}</span>
        <span className={styles.meta}>
          {questionCount} {questionCount > 1 ? 'questions' : 'question'}
        </span>
      </span>

      {selected ? (
        <span className={`${styles.indicator} ${styles.filled}`}><CheckIcon /></span>
      ) : (
        <span className={`${styles.indicator} ${styles.empty}`} />
      )}
    </button>
  )
}

export default QuizCard
