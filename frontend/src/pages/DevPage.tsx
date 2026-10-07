import Button from '../components/button/Button'
import CheckIcon from '../components/icons/CheckIcon'
import CrossIcon from '../components/icons/CrossIcon'

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
    </main>
  )
}

export default DevPage