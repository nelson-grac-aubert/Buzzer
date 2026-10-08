## Documentation Conception | user

Ici, on a une relation Bi directionnelle.

### Relation bidirectionnelle

Deux entités lié en 1-N (1 game a plusieurs joueurs | Game 1----N Player)

En base, il n'y a qu'un seul lien : la clé étrangère parent_id dans la table de l'enfant. Une relation est bidirectionnelle quand, en Java, chacun des deux connaît l'autre :

1. l'Enfant a un champ qui contient son Parent
2. Le Parent a une liste de ses Enfants.

On la choisit quand le code a besoin de naviguer dans les deux sens.

### Les règles

1. Une seule information en base, deux en java.
2. Un seul côté est dit "propriétaire" de la colonne. 

C'est le côté dont la table porte la clé étrangère, il a @ManyTonOne, avec @JoinColumn.

3. L'autre côté est un miroir. 
La liste du Parent a @OneToMany(mappedBy = "..."), sans @JoinColumn. Le mappedBy contient le nom du champ côté Enfant (pas le nom de la colonne

4. Les deux côtés doivent rester cohérents en mémoire.

5. La cascade est indépendante du propriétaire.

6. Attention aux boucles.