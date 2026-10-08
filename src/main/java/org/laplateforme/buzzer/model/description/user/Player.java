package org.laplateforme.buzzer.model.description.user;

import jakarta.persistence.*;
import org.laplateforme.buzzer.model.description.game.Game;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private boolean isOwner;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;

    // ________________________________ CONSTRUCTOR _____________________________
    private Player(String name, Game game){
        this.name    = name;
        this.game = game;
        this.game.addPlayer(this);
    }

    protected Player(){}

    // _________________________________ GETTER _________________________________
    public Game getGame(){
        return this.game;
    }
    // _________________________________ SETTER _________________________________
    public void setIsOwner(){
        this.isOwner = true;
    }

    // __________________________________ HELPER ________________________________
}
