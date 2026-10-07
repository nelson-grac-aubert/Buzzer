package org.laplateforme.buzzer.model.description;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //
    private String title;

    @OneToMany
    @JoinColumn(name = "quiz_id")
    private List<Question> questions;

    // requis par JPA
    protected Quiz() {}

    public Quiz(String title, List<Question> questions) {
        if (questions == null || questions.isEmpty()) {
            throw new IllegalArgumentException("A quiz must contain at least one question");
        }
        this.title = title;
        this.questions = questions;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public List<Question> getQuestions() {return Collections.unmodifiableList(questions);}
}
