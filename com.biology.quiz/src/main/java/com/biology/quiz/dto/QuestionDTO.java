package com.biology.quiz.dto;

import lombok.Data;

@Data
public class QuestionDTO {
    private Long id;
    private String text;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
}
