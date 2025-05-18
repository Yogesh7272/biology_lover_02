package com.biology.quiz.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Question {
    @Id @GeneratedValue
    private Long id;

    private String text;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctOption;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;
}
