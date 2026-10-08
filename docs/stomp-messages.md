# Pour chaque étape du jeu, V0 de ce que l'écran animateur et l'écran joueur envoient au serveur et reçoivent de lui.  
MVP donc pas de reconnection / état partagé pour l'instant 

## Conventions communes

- API HTTP  préfixe `/api`, JSON 
- WebSocket  endpoint `/ws`, STOMP 
- Diffusion à toute la partie  `/topic/games/{gameCode}` 
- Actions des clients  `/app/games/{gameCode}/...` 
- Noms des champs = ceux des entités si elle existe : `name`, `title`, `txt` 

## Création et inscription

En HTTP, avant d'ouvrir le WebSocket. Le client garde `gameCode` et `userId` pour toute la suite de la partie.

### Parcours animateur

1. Sur l'écran de choix du quiz, le front récupère la liste des quiz :

`GET /api/quizzes` 200

```json
[{ "id": 1, "title": "Les types en Java", "questionCount": 10 },
{ "id": 2, "title": "Compilé vs. interprété ", "questionCount": 5 }...]
```

2. L'animateur choisit un quiz et la durée par question (20 s par défaut), puis clique sur « Créer la partie » :

`POST /api/games` 201

```json
{ "quizId": 1, "questionDurationSeconds": 20 }
```
Stocker durée dans Game plutot que dans Question? 
Le serveur crée la Game et le User animateur (owner = true). La durée vaut pour toutes les questions de la partie. 
Sur Kahoot et Blimpy, un animateur n'a pas de name, est ce qu'on laisse le champ null (A autoriser dans le schéma BDD?) ou est ce que je rajoute un input, que l'hote puisse avoir un username? 

Réponse :

```json
{ "gameCode": "ABCDE", "userId": 1 }
```

3. Le front ouvre le WebSocket et affiche la salle d'attente sur `/host/ABCDE`.

### Parcours joueur

1. Sur l'accueil, le joueur saisit le code de la partie et son nom, puis clique sur « Rejoindre » :

`POST /api/games/{gameCode}/users` 201

```json
{ "name": "Nelson" }
```

Le serveur crée un User rattaché à la partie (owner = false). Il re-diffuse la liste/le compteur d'utilisateurs a l'hote (et aux potentiels joueurs) déjà dans la salle d'attente. 

Réponse :

```json
{ "gameCode": "ABCDE", "userId": 4, "users" : [{"name":"Antoine"},{"name":"Morgan"}, {"name":"Nelson"}]}
```

2. Le front ouvre le WebSocket et affiche la salle d'attente sur `/play/ABCDE`.

## Connexion WebSocket

Identique pour les deux rôles.

- Handshake HTTP `GET /ws` (`Upgrade: websocket`), réponse `101 Switching Protocols` 
- Trame `CONNECT` 
- `SUBSCRIBE /topic/games/{gameCode}`

