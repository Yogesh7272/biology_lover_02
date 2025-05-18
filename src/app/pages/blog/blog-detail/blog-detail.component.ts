import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../core/models/blog';
import { BlogService } from '../../../core/blog.service'; // Ensure this matches your service file and class name
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  blog!: Blog; // Use definite assignment assertion if you're sure it will be initialized

  constructor(
    private blogService: BlogService, // Ensure this matches your service class name
    private activatedRoute: ActivatedRoute,
    private router: Router // Inject Router service
  ) {}

  ngOnInit(): void {
    // '+' converts string to number, '!' asserts non-null
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.blogService.getBlogsById(id).subscribe(
      data => {
        this.blog = data;
      },
      error => {
        console.error('Error fetching blog detail:', error);
        // Handle error, e.g., navigate back or show a message
        this.router.navigate(['/blogs']); // Navigate back to list on error
      }
    );
  }

  // Method to navigate back to the blog list
  goBack(): void {
    this.router.navigate(['/blogs']); // Navigate to the blog list page
  }
}