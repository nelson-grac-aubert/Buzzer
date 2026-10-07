import Button from "../components/button/Button";

function HomePage() {
  return (
    <main>
      <h1>Buzzer</h1>

      <section>
        <h2>Rejoindre</h2>
        <p>Entrez le code communiqué par votre hôte pour rejoindre une partie.</p>
        <Button variant='primary' onClick={() => console.log('PARTIE REJOINTE')}>REJOINDRE</Button>
      </section>

      <section>
        <h2>Animer</h2>
        <p>Choisissez un quiz et générez un code pour héberger une partie.</p>
        <Button variant='secondary' onClick={() => console.log('PARTIE CREE')}>CREER</Button>
      </section>
    </main>
  )
}

export default HomePage;
// TODO 2: HomePage function returning the structure from the table above:
//   main > h1, then 2 sections, each with h2 + p + Button
//   no onClick yet

// TODO 3: default export
