## Documentation Conception | Answer

### Une clé étrangère en base implique-t-elle une instance en champ dans la classe ?

Non. Une relation entre deux entités peut se déclarer de trois façons. Le critère pour choisir : dans quel sens le code a besoin de naviguer.

1. **Depuis le parent seulement** : l'enfant n'a pas connaissance de son parent.
2. **Depuis l'enfant seulement** : le parent n'a pas connaissance de son ou ses enfants.
3. **Bidirectionnel** : chacun connaît l'autre, ce qui implique de garder les deux côtés cohérents.

Dans les trois cas, la table en base est identique : seule la colonne de clé étrangère porte le lien.

#### Notre choix

Il est plus logique qu'une question ait accès à sa liste de réponses possibles.

Il n'y a pas d'intérêt à ce qu'une answer (qui représente une réponse possible) ait connaissance de sa question parente.

En revanche, l'inverse oui : une question a besoin de sa liste de réponses possibles.

Donc l'annotation de jointure se fera dans la classe Question : un `@OneToMany` avec `@JoinColumn(name = "question_id")`.


### Constructeur et champs de classe 

#### Le champ ID

Le champ id est généré par la base de donnée. Donc mon constructeur laisse l'id à null, 
PostgreSQL le génère à l'insertion de la classe en entité db. Hibernate l'écrit dans le champ après la sauvegarde.(comment ? magie noire ? reflexion surement ?)

A noter les champs isValid hibernate transforme en is_valid. Donc j'ai renommé en db valid par is_valid.


#### Le constructeur protected vide

Obligé pour hibernate(magie noire / reflexion mécanisme non appris.)