package com.biology.quiz.bloggs.service;

import com.biology.quiz.bloggs.entity.Blog;

import java.util.List;

public interface BlogService {

    public List<Blog> getAllBlogs();

    public Blog getBlogById(Long id);

    public Blog createBlog(Blog blog);
}
