import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    { title: 'The Wonders of DNA', description: 'Learn about the structure and function of DNA.', link: '/blog/dna' },
    { title: 'Ecosystem Dynamics', description: 'Explore how ecosystems maintain balance.', link: '/blog/ecosystems' },
    { title: 'Cell Biology Basics', description: 'A beginner’s guide to cell structures.', link: '/blog/cells' }
  ];
}
