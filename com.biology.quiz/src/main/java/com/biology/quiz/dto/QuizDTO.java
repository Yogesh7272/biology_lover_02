package com.biology.quiz.dto;

import lombok.Data;

@Data
public class QuizDTO {
    private Long id;
    private String title;
    private String bannerUrl;
    private int durationMinutes;
    private String status;
}
