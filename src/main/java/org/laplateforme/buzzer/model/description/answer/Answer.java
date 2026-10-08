package org.laplateforme.buzzer.model.description.answer;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String  title;

    private boolean isValid;


    // _________________________________ Constructeur _________________________________
    public Answer(String title, boolean isValid){
        this.title   = title;
        this.isValid = isValid;
    }

    protected Answer(){}

    //_____________________________________ Getter _____________________________________
    public Long getId(){return this.id;}
    public String getTitle(){return this.title;}
    public boolean isValid(){return this.isValid;}
}
