import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-opportunity-section',
  imports: [CommonModule,CardComponent],
  templateUrl: './opportunity-section.component.html',
  styleUrl: './opportunity-section.component.css'
})
export class OpportunitySectionComponent {
  cards = [
    { title: 'Quizzes', bgColor: '#6ec1e4', image: 'assets/images/tiger.jpg' },
    { title: 'Hackathons', bgColor: '#34d399', image: 'assets/icons/hackathon.png' },
    { title: 'Scholarships', bgColor: '#a78bfa', image: 'assets/icons/scholarship.png' },
    { title: 'Conferences', bgColor: '#fbbf24', image: 'assets/icons/conference.png' },
    { title: 'College Festivals', bgColor: '#f87171', image: 'assets/icons/festival.png' },
  ];
}
