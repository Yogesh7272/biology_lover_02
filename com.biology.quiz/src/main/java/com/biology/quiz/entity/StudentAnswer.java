package com.biology.quiz.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class StudentAnswer {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Submission submission;

    @ManyToOne
    private Question question;

    private String selectedOption;
    private boolean isCorrect;
}
