import useCountdown from '../../hooks/useCountdown'
import styles from './Timer.module.css'

const SEGMENT_COUNT = 10

type TimerProps = {
  durationMs: number
  size?: 'large' | 'small'
  urgentSeconds?: number
}

// Display only: the server decides when the question really ends.
// To restart it for a new question, give it a new key (e.g. key={questionId})
function Timer({ durationMs, size = 'large', urgentSeconds = 5 }: TimerProps) {
  const remainingMs = useCountdown(durationMs)

  // 4.2s left shows "05": the second only changes once it is fully over
  const seconds = Math.ceil(remainingMs / 1000)
  const isUrgent = seconds <= urgentSeconds

  // rounded up like the seconds: 14s out of 20 lights 7 segments, 3s lights 2
  const filledCount = Math.ceil((remainingMs / durationMs) * SEGMENT_COUNT)

  const className = [styles.timer, styles[size], isUrgent && styles.urgent].filter(Boolean).join(' ')

  return (
    <div className={className}>
      <span className={styles.value}>{String(seconds).padStart(2, '0')}</span>

      <div className={styles.bar}>
        {Array.from({ length: SEGMENT_COUNT }, (_, index) => (
          <span key={index} className={index < filledCount ? `${styles.segment} ${styles.filled}` : styles.segment} />
        ))}
      </div>
    </div>
  )
}

export default Timer
