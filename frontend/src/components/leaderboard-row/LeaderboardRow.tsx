import styles from './LeaderboardRow.module.css'

type LeaderboardRowProps = {
  rank: number
  name: string
  score: number
  isMe?: boolean
}

// isMe highlights the row of the player looking at the screen
function LeaderboardRow({ rank, name, score, isMe = false }: LeaderboardRowProps) {
  return (
    <div className={isMe ? `${styles.row} ${styles.me}` : styles.row}>
      <span className={styles.rank}>{rank}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.score}>{score}</span>
    </div>
  )
}

export default LeaderboardRow
