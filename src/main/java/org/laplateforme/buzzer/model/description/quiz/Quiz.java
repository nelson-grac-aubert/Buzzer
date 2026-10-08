package org.laplateforme.buzzer.model.description.quiz;

import jakarta.persistence.*;
import org.laplateforme.buzzer.model.description.question.Question;

import java.util.List;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "quiz_id", nullable = false)
    @OrderBy("id")
    private List<Question> questions;


    // ________________________________ CONSTRUCTOR ________________________________
    public Quiz(String title, List<Question> questions){
        this.title     = title;
        this.questions = questions;
    }

    protected Quiz(){}

    // ___________________________________ GETTER ___________________________________
    public Long getId(){return this.id;}
    public String getTitle(){return this.title;}
    public List<Question> getQuestions(){return this.questions;}
}
