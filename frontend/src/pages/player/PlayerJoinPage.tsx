import { useState } from 'react'
import Button from '../../components/button/Button'
import CodeInput from '../../components/code-input/CodeInput'
import TextInput from '../../components/text-input/TextInput'
import styles from './PlayerJoinPage.module.css'

const CODE_LENGTH = 5

function PlayerJoinPage() {
  const [code, setCode] = useState('')
  const [username, setUsername] = useState('')

  // join only with a full code and a non blank username
  const canJoin = code.length === CODE_LENGTH && username.trim() !== ''

  function handleJoin() {
    // TODO: POST /api/games/{code}/users, then navigate to /play/{code}
    console.log('join', { code, username: username.trim() })
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Buzzer</h1>
        <p className={styles.intro}>Entre le code transmis par l'hôte.</p>

        <div className={styles.code}>
          <CodeInput label="Code de la partie" value={code} onChange={setCode} hint="5 lettres" length={CODE_LENGTH} />
        </div>

        <TextInput label="Pseudo" value={username} onChange={setUsername} placeholder="Ton pseudo" hint="20 caractères maximum" maxLength={20} />

        <div className={styles.actions}>
          <Button variant="primary" onClick={handleJoin} disabled={!canJoin}>Rejoindre</Button>
        </div>
      </div>
    </main>
  )
}

export default PlayerJoinPage
