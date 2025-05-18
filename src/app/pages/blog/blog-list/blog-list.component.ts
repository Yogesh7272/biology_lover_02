import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../core/models/blog';
import { BlogService } from '../../../core/blog.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',    
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
   blogs: Blog[] = [];
  errorMessage : string ='';
   private blogsSubscription: Subscription | undefined;
  constructor(private blogService: BlogService, private routes: Router){}


  ngOnInit(): void {
  this.blogService.getAllBlogs().subscribe(data => this.blogs = data);
  }

viewBlog(id :  number | undefined):void{
  this.routes.navigate(['/blogs', id]);
}

loadBlogs(): void {
    this.errorMessage = ''; // Clear previous errors
    this.blogs = []; // Clear current blogs while loading
    this.blogsSubscription = this.blogService.getAllBlogs().subscribe(
      data => {
        this.blogs = data;
      },
      error => {
        console.error('Error fetching blogs:', error);
        this.errorMessage = 'Failed to load blog posts. Please check your connection.';
      }
    );
  }

ngOnDestroy(): void {
    if (this.blogsSubscription) {
      this.blogsSubscription.unsubscribe(); // Prevent memory leaks
    }
  }


}
