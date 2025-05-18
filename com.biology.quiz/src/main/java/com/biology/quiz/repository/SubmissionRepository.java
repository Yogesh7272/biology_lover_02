package com.biology.quiz.repository;

import com.biology.quiz.entity.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubmissionRepository extends JpaRepository<Submission,Long> {
}
