package com.biology.quiz.bloggs.service.serviceImpl;

import com.biology.quiz.bloggs.entity.Blog;
import com.biology.quiz.bloggs.repository.BlogRepositories;
import com.biology.quiz.bloggs.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class blogServiceImpl implements BlogService {

    @Autowired
    private BlogRepositories blogRepositories;

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepositories.findAll();
    }

    @Override
    public Blog getBlogById(Long id) {
        return blogRepositories.findById(id).orElseThrow();
    }

    @Override
    public Blog createBlog(Blog blog) {
        blog.setCreatedAt(LocalDate.now());
        return blogRepositories.save(blog);
    }
}
