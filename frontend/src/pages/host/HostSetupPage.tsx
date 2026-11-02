import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../../components/button/Button'
import NumberStepper from '../../components/number-stepper/NumberStepper'
import QuizCard from '../../components/quiz-card/QuizCard'
import type { Quiz } from '../../types/quiz'
import styles from './HostSetupPage.module.css'

// TODO: replace with GET /api/quizzes
const quizzes: Quiz[] = [
  { id: 1, title: 'JavaScript : les bases', questionCount: 10 },
  { id: 2, title: 'Java & Spring', questionCount: 12 },
  { id: 3, title: 'TypeScript strict', questionCount: 10 },
]

function HostSetupPage() {
  const navigate = useNavigate()
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null)
  const [duration, setDuration] = useState(20)

  function handleCreate() {
    // TODO: POST /api/games, then navigate to /host/{gameCode}
    console.log('create', { quizId: selectedQuizId, questionDurationSeconds: duration })
  }

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <Button variant="secondary" onClick={() => navigate('/')}>Retour</Button>
      </div>

      <h1 className={styles.title}>Choisis un quiz</h1>

      <div className={styles.grid}>
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            questionCount={quiz.questionCount}
            selected={quiz.id === selectedQuizId}
            onClick={() => setSelectedQuizId(quiz.id)}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <NumberStepper label="Durée par question" value={duration} onChange={setDuration} min={15} max={60} step={5} unit="s" />
        <div className={styles.create}>
          <Button variant="primary" onClick={handleCreate} disabled={selectedQuizId === null}>Créer la partie</Button>
        </div>
      </div>
    </main>
  )
}

export default HostSetupPage
