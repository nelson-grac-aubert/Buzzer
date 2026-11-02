# Le Buzzer

## 1. Overview

Le Buzzer is a real-time quiz game in the style of Kahoot. A host opens a game on a shared screen, players join from their phones with a 5-letter code, answer each question against the clock, and the leaderboard updates for everyone.

Stack:
- Front: React 19, TypeScript (strict), Vite, React Router, CSS Modules
- Back: Spring Boot 4 (Java 17), WebSocket + STOMP for real time, REST for game creation and joining

Project status: the project is **not finished**. The front-end screens and components were built first, with mock data. The back end has its domain model in progress, but no API or WebSocket endpoint exists yet, so the front and the back are not connected.

Repository layout:
- `frontend/`: the React application
- `src/`, `pom.xml`, `mvnw`: the Spring Boot application
- `docs/`: design and API documents (`stomp-messages.md` describes the HTTP and STOMP messages agreed between front and back)

## 2. Quick Start

Prerequisites: Node.js 19+, JDK 17+

Front end, on http://localhost:5173:

```bash
cd frontend
npm install
npm run dev
```

Other front-end commands:

```bash
npm run build    # type-check and production build
npm run lint     # ESLint
```

Back end, on http://localhost:8080:

```bash
./mvnw spring-boot:run 
./mvnw test
```

Pages available in the front end:

| URL | Page |
| --- | --- |
| `/` | Home: join or host a game |
| `/join` | Player: enter the game code and a nickname |
| `/host` | Host: choose a quiz and the question duration |
| `/dev` | Showcase of every UI component in all its states |

## 3. Features

### a. Existing

Screens (front end, mock data):
- **Home**: two entry points, "Rejoindre une partie" and "Animer une partie".
- **Join a game**: a 5-letter code input (upper case and letters only, enforced while typing) and a nickname (20 characters max). The button unlocks once both are valid.
- **Create a game**: a grid of quizzes to pick from and a question duration from 15 to 60 seconds. The button unlocks once a quiz is selected.
- All screens are responsive, designed mobile first.

Back end:
- Spring Boot project with the WebSocket starter
- Domain model in progress on the `feat/backend` branch: quiz, question, answer, game, player, game code generator

### b. Future

- **REST API**: list the quizzes (`GET /api/quizzes`), create a game (`POST /api/games`), join a game (`POST /api/games/{gameCode}/users`)
- **Real time over STOMP**: one topic per game (`/topic/games/{gameCode}`) to share the players, questions, answers and results
- **Host screens**: lobby (code in large type and live player list), live question, results with leaderboard, final podium
- **Player screens**: lobby, question, result of the question, final ranking
- **Scoring**
- **Joining during a game** and reconnection after a network loss
- **Projection mode**: host screens scaled ×2 for a video projector
- **Accessibility**: keyboard focus styles and screen reader checks

