## Documentation Conception | Question

Ma table question contient quatre lignes : 
1. id
2. title
3. duration_seconds
4. quiz_id | clé étrangère.


A noter, que la table fille est : answer. question doit donc porté sa liste d'answer. relation 'oneToMany'.

### Choix clé étrangère :

Pour le quizz_id, la logique est la meme que pour question_id déclaré dans la table answer. 
L'enfant n'a pas d'intérêt particulier à connaitre son parents.

Donc, on aura dans la classe 'Quiz' une relation '@oneToMany' sur la clé étrangère nommé 'quiz_id' via un champ list<Question>. 

### La cascade :

C'est un nouveau concept pour moi, je ne l'avais encore jamais vu, je n'ai pratiquement jamais fais de SQL.

Le concept, ll y a deux contextes :
1. La mémoire JAVA
2. La persistance en BDD

Imaginons le scénario suivant, je crée d'abord les answers puis la question : 
1. Je crée 4 objets Answer : « Sydney », « Canberra », « Melbourne », « Perth » ;
2. Je crée la Question « Capitale de l'Australie ? » en lui passant ces 4 Answer dans sa liste.

À ce moment-là, rien n'existe en base. Ce sont juste 5 objets en mémoire, sans id.

En base l'ordre est inversé Answer contient la clé étrangère, donc il faut que la question existe pour pouvoir
insérer les réponses à cette question (logique).

Quand on sauvegardes la Question, Hibernate fait :

- Insère la ligne de la question → PostgreSQL lui donne l'id 7;
- Grâce à la cascade, parcourt sa liste d'Answer, et insère chacune avec question_id = 7.

Sans la cascade, l'étape 2 n'a pas lieu. Hibernate insère la question, voit 4 Answer dans la liste qui n'existent pas en base, et plante.


#### orphanRemoval

Ici, cela couvre un dernier cas. Si un answer est retirer de notre liste. Alors elle n'est plus liée a une question.

Il s'agit donc d'une valeur qui ère sans lien, ni moyen de la retourver. Donc on la supprime.

Une Answer n'a aucun sens sans sa question : c'est de la composition. La question possède ses answers, donc tout ce qui lui arrive leur arrive aussi.


#### nullable = false

Ici, les champs NOT_NULL en bdd sont obligatoirement interdit d'être null.