package org.laplateforme.buzzer.model.description.question;

import jakarta.persistence.*;
import org.laplateforme.buzzer.model.description.answer.Answer;

import java.util.List;


@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private int durationSeconds;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "question_id", nullable = false)
    private List<Answer> answers;


    // __________________________________ Constructor __________________________________
    public Question(String title, int durationSeconds, List<Answer> answers){
        this.title = title;
        this.durationSeconds = durationSeconds;
        this.answers = answers;
    }

    protected Question(){}

    // ____________________________________ Getter _____________________________________
    public Long getId(){return this.id;}
    public String getTitle(){return this.title;}
    public int getDurationSeconds(){return this.durationSeconds;}
    public List<Answer> getAnswers(){return this.answers;}
}
