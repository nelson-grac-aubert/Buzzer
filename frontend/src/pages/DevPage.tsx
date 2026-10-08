import Button from '../components/button/Button'
import CheckIcon from '../components/icons/CheckIcon'
import CrossIcon from '../components/icons/CrossIcon'
import AnswerButton from '../components/answer-button/AnswerButton'
import type { AnswerOption, AnswerState } from '../components/answer-button/AnswerButton'
import TextInput from '../components/text-input/TextInput'
import { useState } from 'react'

const answerOptions: AnswerOption[] = ['a', 'b', 'c', 'd']
const answerStates: AnswerState[] = ['default', 'selected', 'validated', 'correct', 'wrong', 'dimmed']

function DevPage() {
  const [username, setUserName] = useState("")
  
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
        {answerStates.map((state) =>
          answerOptions.map((option) => (
            <AnswerButton key={`${state}-${option}`} option={option} state={state}>
              {state}
            </AnswerButton>
          ))
        )}
      </section>

      <section>
        <h2>TextInput</h2>
        <TextInput label="pseudo" value={username} onChange={setUserName} placeholder="Ton pseudo" hint="20 caractères maximum" maxLength={20} />      </section>
    </main>
  )
}

export default DevPage
