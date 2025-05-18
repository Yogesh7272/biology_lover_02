package com.biology.quiz.dashboard.respository;

import com.biology.quiz.dashboard.entity.StudentUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentUserRepository extends JpaRepository<StudentUser, Long> {
    Optional<StudentUser> findByUsername(String username);
    boolean existsByUsername(String username);
}
