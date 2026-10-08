# Le Buzzer

Application de quiz en temps réel : un animateur ouvre une partie, les joueurs la rejoignent avec un code à 5 lettres, répondent aux questions, et le classement se met à jour chez tout le monde.

Stack : Spring Boot 3 (WebSocket + STOMP) côté serveur, React 18 + TypeScript strict (Vite) côté client.

---

## Lancement

> À compléter : prérequis, commandes pour lancer le backend et le frontend, ports utilisés.

# Le Buzzer — Parcours front

```mermaid
flowchart TD
    A["Accueil /<br/>"] -->|Créer une partie<br/>nom + quiz| B
    A -->|Rejoindre<br/>pseudo + code| G
    A -.->|Rejoindre en cours<br/>l'instantané mène à l'écran courant| H

    subgraph Animateur ["Animateur — /host/:code"]
        B["Salle d'attente<br/>code en grand + joueurs en direct"] -->|Lancer la question| C
        C["Question en cours<br/>décompte + progression des réponses"] -->|Clore, ou fin du temps| D
        D["Résultats<br/>bonne réponse + classement"] -->|Question suivante| C
        D -->|Terminer| E["Fin<br/>classement final"]
    end

    subgraph Joueur ["Joueur — /play/:code"]
        G["Salle d'attente<br/>en attente de la question"] -->|question lancée| H
        H["Question<br/>propositions + décompte<br/>répondre une seule fois"] -->|question close| I
        I["Résultat<br/>juste ou faux + sa place"] -->|question suivante| H
        I -->|partie terminée| J["Fin<br/>classement final"]
    end
```
