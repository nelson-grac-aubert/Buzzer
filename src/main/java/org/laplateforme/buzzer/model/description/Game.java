package org.laplateforme.buzzer.model.description;

import jakarta.persistence.*;
import org.laplateforme.buzzer.model.helper.CodeGenerator;

import java.util.ArrayList;
import java.util.List;

/**
 * This class represent the game itSelf. Instance of one game.
 */
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    @ManyToOne()
    private Quiz quiz;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "game_id", nullable = false)
    private List<User> users;


    public Game(Quiz quiz){
        this.code  = CodeGenerator.generateCode();
        this.quiz = quiz;
        this.users = new ArrayList<>();
    }

    // Pourquoi un no-arg constructor ?
    protected Game(){}

    public void addPlayer(User user){
        users.add(user);
    }

    /**
     * DEPRECATED
     * private Question current;
     *
     * public Question next(){
     *         if(this.current == null){
     *             this.current = quiz.getQuestions().getFirst();
     *             return this.current;
     *         }
     *
     *         if(this.quiz.getQuestions().indexOf(this.current) + 1 < this.quiz.getQuestions().size()){
     *             int index = this.quiz.getQuestions().indexOf(this.current) + 1;
     *             this.current = this.quiz.getQuestions().get(index);
     *             return this.current;
     *         }
     *
     *         return null;
     *     }
     */
}
