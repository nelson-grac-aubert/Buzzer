import { useNavigate } from 'react-router'
import Button from "../components/button/Button";
import styles from './HomePage.module.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Buzzer</h1>

      <div className={styles.choices}>
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Rejoindre une partie</h2>
          <p className={styles.cardText}>Entrez le code communiqué par votre hôte pour rejoindre une partie.</p>
          <Button variant='primary' onClick={() => navigate('/join')}>REJOINDRE</Button>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Animer une partie</h2>
          <p className={styles.cardText}>Choisissez un quiz et générez un code pour héberger une partie.</p>
          <Button variant='secondary' onClick={() => navigate('/host')}>CREER</Button>
        </section>
      </div>
    </main>
  )
}

export default HomePage;
