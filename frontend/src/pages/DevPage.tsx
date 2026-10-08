import Button from '../components/button/Button'
import CheckIcon from '../components/icons/CheckIcon'
import CrossIcon from '../components/icons/CrossIcon'
import AnswerButton from '../components/answer-button/AnswerButton'
import type { AnswerOption, AnswerState } from '../components/answer-button/AnswerButton'

const answerOptions: AnswerOption[] = ['a', 'b', 'c', 'd']
const answerStates: AnswerState[] = ['default', 'selected', 'validated', 'correct', 'wrong', 'dimmed']
const answerLabels: Record<AnswerOption, string> = { a: 'Paris', b: 'Lyon', c: 'Marseille', d: 'Toulouse' }

function DevPage() {
  return (
    <main>
      <h1>Test des composants</h1>
      <section>
        <h2>Buttons</h2>
        <Button variant='primary' onClick={() => console.log('clicked button 1')}>jouer</Button>
        <Button variant='primary' onClick={() => console.log('clicked button 2')} disabled={true}>JOUER</Button>
        <Button variant='secondary' onClick={() => console.log('clicked button 3')}>retour</Button>
        <Button variant='secondary' onClick={() => console.log('clicked button 4')} disabled={true}>RETOUR</Button>
      </section>

      <section>
        <h2>Icons</h2>
        <CheckIcon />
        <CrossIcon />
      </section>

      <section>
        <h2>AnswerButton</h2>
        {answerStates.map((state) => (
          <div key={state}>
            <h3>{state}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 342px)', gap: 'var(--spacing-24)', padding: 'var(--spacing-8)' }}>
              {answerOptions.map((option) => (
                <AnswerButton
                  key={option}
                  option={option}
                  state={state}
                  onClick={() => console.log(`clicked answer ${option}`)}
                >
                  {answerLabels[option]}
                </AnswerButton>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default DevPage
