package com.biology.quiz.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Quiz {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String bannerUrl;
    private int durationMinutes;
    private String status; // PUBLISHED, DRAFT

    @OneToMany(mappedBy = "quiz" ,cascade = CascadeType.ALL)
    private List<Question> questions;
}
