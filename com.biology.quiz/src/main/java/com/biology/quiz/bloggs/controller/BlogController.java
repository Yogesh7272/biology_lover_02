package com.biology.quiz.bloggs.controller;

import com.biology.quiz.bloggs.entity.Blog;
import com.biology.quiz.bloggs.service.BlogService;
import com.biology.quiz.bloggs.service.BlogService.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/blog")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/getBlogs")
    public ResponseEntity<List<Blog>> getAllBlogs(){
      try{
          List<Blog> blogs =   blogService.getAllBlogs();
          if(blogs.isEmpty()){
              return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
          }
          return ResponseEntity.ok(blogs);
      }catch (Exception e){
          System.out.println("Error fectching blogs "+ e.getMessage());
        return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    @GetMapping("/{id}")
    public  ResponseEntity<Blog> getBlogById(@PathVariable Long id){
          Blog blog = blogService.getBlogById(id);
          return ResponseEntity.ok(blog);
    }

    @PostMapping("/add")
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog){
        Blog createBlogs = blogService.createBlog(blog);
        return ResponseEntity.ok(createBlogs);
    }
}
