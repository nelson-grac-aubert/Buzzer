package org.laplateforme.buzzer.model.description;

import jakarta.persistence.*;

import java.time.Duration;
import java.util.Collections;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    // un question a plusieurs réponse
    @OneToMany
    @JoinColumn(name = "question_id")
    private List<Answer> answers;

    private Duration duration;

    public Question(){}

    public Question(String title, List<Answer> answers, Duration duration){
        this.title    = title;
        this.answers  = answers;
        this.duration = duration;
    }

    public String getTitle(){
        return this.title;
    }
    public List<Answer> getAnswers(){
        return Collections.unmodifiableList(this.answers);
        };
    public Duration getDuration(){
        return this.duration;
    }
}
