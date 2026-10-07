package org.laplateforme.buzzer.model.description;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String txt;
    private boolean isCorrectAnswer;

    public Answer(){}

    public Answer(String txt, boolean isCorrectAnswer, Question question){
        this.txt             = txt;
        this.isCorrectAnswer = isCorrectAnswer;
    }

    public String getTxt(){
        return this.txt;
    }
    public boolean isCorrectAnswer(){
        return this.isCorrectAnswer;
    }
}
