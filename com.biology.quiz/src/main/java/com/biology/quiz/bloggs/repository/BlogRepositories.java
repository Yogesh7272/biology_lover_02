package com.biology.quiz.bloggs.repository;

import com.biology.quiz.bloggs.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepositories  extends JpaRepository<Blog,Long> {
}
