package org.laplateforme.buzzer.model.description;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private boolean owner;

    @ManyToOne(optional = false)
    @JoinColumn(name = "game_id")
    private Game game;

    // Volontairement deux constructeurs. En fonction du scénario.
    public User(String name){
        this.name  = name;
        this.owner = false;
        this.game  = null; // Par défaut il est possible de créer un utilisateur sans jeu, car un user peut créer une partie.
    }

    public User(String name, Game game, boolean owner){
        this.name  = name;
        this.game  = game;
        this.owner = owner;
    }

    // No-arg constructor.
    protected User(){}

    public String getName(){
        return this.name;
    }
    public void setGame(Game game){
        this.game = game;
    }

    public boolean isOwner(){return this.owner;}
    public void setOwner(){
        this.owner = true;
    }
}
