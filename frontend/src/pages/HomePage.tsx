import Button from "../components/button/Button";

function HomePage() {
  return (
    <main>
      <h1>Buzzer</h1>

      <section>
        <h2>Rejoindre une partie</h2>
        <p>Entrez le code communiqué par votre hôte pour rejoindre une partie.</p>
        <Button variant='primary' onClick={() => console.log('PARTIE REJOINTE')}>REJOINDRE</Button>
      </section>

      <section>
        <h2>Animer une partie</h2>
        <p>Choisissez un quiz et générez un code pour héberger une partie.</p>
        <Button variant='secondary' onClick={() => console.log('PARTIE CREE')}>CREER</Button>
      </section>
    </main>
  )
}

export default HomePage;

