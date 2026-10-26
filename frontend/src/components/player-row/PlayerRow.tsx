import styles from './PlayerRow.module.css'

type PlayerRowProps = {
  name: string
  connected?: boolean
}

function PlayerRow({ name, connected = true }: PlayerRowProps) {
  return (
    <div className={connected ? styles.row : `${styles.row} ${styles.offline}`}>
      <span className={styles.dot} />
      <span className={styles.name}>{name}</span>
      {!connected && <span className={styles.tag}>Hors ligne</span>}
    </div>
  )
}

export default PlayerRow
