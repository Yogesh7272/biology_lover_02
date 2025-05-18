package com.biology.quiz.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Submission {
   @Id @GeneratedValue
    private Long id;

   @ManyToOne
   private Quiz quiz;

    private String studentName;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int totalScore;

    @OneToMany(mappedBy = "submission", cascade = CascadeType.ALL)
    private List<StudentAnswer> studentAnswers;
}
