# WebSocket / STOMP design

## 1. Game state machine

1. WAITING_ROOM : The game hasn't started yet, host waits for users to join. "Start game" button on host screen triggers QUESTION. 
2. QUESTION : The users are answering. Timer to 0 or button "Show Answer" on host screen triggers QUESTION_RESULT. 
3. QUESTION_RESULT : The users can see the question result and button "Next Question" on host side triggers QUESTION again (greyed out and unclickable if no more question), "Finish game" triggers GAME_END. 
4. GAME_END : Leaderboard, no transition to any other state. 

Questions : 
- Decide of the duration of all questions once at the start of the game, or for every question? I think once on start, one by default but changeable, and then can be changed on every QUESTION_RESULT, facultative. 
- If all users have answered, does it terminate the question? Blimpy exemple : NO, host has to trigger. 
- What state can a player join? I think all but GAME_END.
But if they join mid question, they only have the shared time left to answer.  

## 2. Player and host identity

- 3 notions :
  - username : shown on screen, public.
  - playerId : identifies a player in broadcast messages (player list, leaderboard), public.
  - token : proves "I am this player", secret, only known by the player and the server.
- playerId and token are generated server-side.
- They are returned in the response to "create game" (host) and "join game" (player).
- The client stores gameCode, playerId and token in localStorage (browser storage) :
  - kept after a page reload, a closed tab or a closed browser, so the player can come back to the game
  - shared by all tabs of a browser : one browser = one player. We test with several machines.
- Token check happens once, on STOMP CONNECT :
  - the client sends its token in the CONNECT frame headers
  - a Spring ChannelInterceptor reads it, finds the player, and gives the session a Principal
  - Principal : a Java object that says "who is the user" (getName() returns the playerId). It's like a name badge given at the entrance.
  - Spring adds the Principal to every message of this session, so no controller has to check the token again
  - on reconnection, a new CONNECT with the same token gives back the same identity, even if the STOMP session id changed
- Consequence : the client needs its token before opening the WebSocket connection
- username : unique within a game, case-insensitive and trimmed ("Bob" = "bob "), max length. Rejoining only works with the token, never with the nickname, otherwise anyone could take someone else's place.
- Host : same mechanism (playerId + token). is_owner only exists server-side, the client never sends it. For every host-only action, the service checks that the session identity is the game owner.

Questions :
- Max username length? How to check unicity in a same game? RegEx library for offensive names? 
- A player can come back after closing the tab, so the server must keep disconnected players (score, answers) until the end of the game.

## 3. Time authority

- Time left on a question is always decided server-side (all players have the same limit, helps with synchronisation and responsiveness)
- cheating is always worse than latency (timer on client side can me manipulated, a few miliseconds of difference between clients time to answer doesn't matter).
- It is sent to user screens once on question start / late join as a time remaining, displayed client-side to be coherent with late-joiners and slow connections.
- There can be a .5 second grace period after the timer end to account for this
- if the user is too late to validate, it sends its chosen but not validated answer.
- server executes the timer and closes the question if not closed by host browser first
- Server calculates delay for leaderboard. 

## 4. Presence and disconnection

- what happens when a host or user gets DCed, on server and on client side : being a member of the game (a score, a username) and having an active STOMP session is not the same thing : 
  - server gets a SessionDisconnectEvent on tab close or when heartbeat stops : decide how long it takes? 15 secs?
  - who sees disconnected users? i think only the host
  - one user, two tabs on browser : what does it do? 
  - player who leaves during the waiting room : is he kept in user list, leaderboard? can he re-join? i think so 
  - what happens on host disconnect? if QUESTION : server timer closes it. if QUESTION_END : what happens? is game stuck forever? 
  - user disconnected : greys out screen and says "disconnected, trying to reconnect" with spinner. exponential backoff : 1 sec, 2 sec, 4 sec, 8 sec, caps at 16. add a jitter : random millis so everyone don't reconnect at the same time if server is down for a bit 
  - game memory can be cleaned when host closes it manually on GAME_END, or when the host has left for 5 min

## 5. Scoring and leaderboard

## 6. Full state (snapshot)

## 7. STOMP destinations

## 8. Message catalog

## 9. Errors

## 10. REST or WebSocket

## 11. Format conventions

## 12. Technical configuration

## 13. Feedback on the data model
