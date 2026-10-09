import styles from './ConnectionBadge.module.css'

export type ConnectionStatus = 'connected' | 'reconnecting' | 'disconnected'

const labels: Record<ConnectionStatus, string> = {
  connected: 'En ligne',
  reconnecting: 'Reconnexion',
  disconnected: 'Hors ligne',
}

type ConnectionBadgeProps = {
  status: ConnectionStatus
}

// Only displays the status: plugging it on the real STOMP connection comes later
function ConnectionBadge({ status }: ConnectionBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      <span className={styles.dot} />
      {labels[status]}
    </span>
  )
}

export default ConnectionBadge
