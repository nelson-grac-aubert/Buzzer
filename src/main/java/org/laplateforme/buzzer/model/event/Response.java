package org.laplateforme.buzzer.model.event;

import org.laplateforme.buzzer.model.description.Answer;
import org.laplateforme.buzzer.model.description.Question;
import org.laplateforme.buzzer.model.description.User;

import java.time.OffsetDateTime;

/**
 * La partie KZPQT : elle existe vraiment ?
 * Le joueur X : il fait bien partie de cette partie ? Et c'est un joueur, pas l'animateur ?
 * La question 3 : c'est bien la question en cours de cette partie, pas une ancienne ?
 * Le moment : la question est encore ouverte, ou le temps est écoulé ?
 * L'option B : elle appartient bien à la question 3 ?
 * Et enfin : le joueur n'a pas déjà répondu à cette question ?
 */

public class Response {
    private final Question question;
    private final User user;
    private final Answer answer;
    private final OffsetDateTime submitTime;

    public Response(Question question, User user, Answer answer, OffsetDateTime submitTime){
        this.question   = question;
        this.user       = user;
        this.answer     = answer;
        this.submitTime = submitTime;
    }

    public Question getQuestion(){return this.question;}
    public User getUser(){return this.user;}
    public Answer getAnswer(){return this.answer;}
    public OffsetDateTime getSubmitTime(){return this.submitTime;}
}
