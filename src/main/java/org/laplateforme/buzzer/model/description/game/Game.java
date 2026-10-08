package org.laplateforme.buzzer.model.description.game;

import jakarta.persistence.*;
import org.laplateforme.buzzer.model.description.quiz.Quiz;
import org.laplateforme.buzzer.model.description.user.Player;
import org.laplateforme.buzzer.model.helper.CodeGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    @ManyToOne(optional = false)
    @JoinColumn(name = "quiz_id")
    // Par contre ici pas de cascade, la suppression d'un game n'entraine pas la suppression d'un quiz
    private Quiz quiz;

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    private List<Player> players;

    // ________________________________ CONSTRUCTOR _____________________________
    public Game(Quiz quiz){
        this.code = CodeGenerator.generateCode();
        this.quiz = quiz;
        this.players = new ArrayList<>();
    }

    protected Game(){}

    // _________________________________ GETTER _________________________________
    public Long getId(){return this.id;}
    public String getCode(){
        return this.code; // A tester fonction seulement écrite via une image mentale, a vérifier qu'il est bien fonctionnel. TDD pour plus tard.
    }
    public Quiz getQuiz(){
        return this.quiz;
    }

    // _____________________________ WORKING METHOD _____________________________
    public void addPlayer(Player player){
        if(player.getGame() != this){
            throw new IllegalArgumentException();
        }

        // J'ajoute quand ma liste est vide est qu'il s'agit de la première insértion dans la liste des joueurs.
        if(this.players.isEmpty()){player.setIsOwner();}
        this.players.add(player);
    }
}
