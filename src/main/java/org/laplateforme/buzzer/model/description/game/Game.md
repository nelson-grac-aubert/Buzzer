## Documentation Conception | Game

#### Règle sur les clés étrangères

La clé étrangère va toujours du côté « plusieurs » de la relation.

    quiz   1 ────< N   game

Un quiz peut être utilisé dans plusieurs games, alors qu'un game n'utilise qu'un seul quiz. Le côté « plusieurs » est donc game : c'est la table `game` qui porte la clé étrangère `quiz_id`.

#### Sens de navigation

On navigue dans le sens game → quiz : depuis un game, on retrouve son quiz.

Le code n'a jamais besoin de partir d'un quiz pour lister ses games. Le champ est donc placé dans la classe `Game` : un objet `Quiz` unique, annoté `@ManyToOne` (« plusieurs Game pour un Quiz »), avec `@JoinColumn(name = "quiz_id")`.

#### Pas de cascade

Un game utilise un quiz, il ne le possède pas. La suppression d'un game ne doit pas entraîner la suppression du quiz : aucune cascade sur ce champ.