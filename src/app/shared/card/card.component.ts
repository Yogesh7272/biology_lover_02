import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'COMING SOON';
  @Input() bgColor: string = '#ffffff';
  @Input() image: string = '';
  @Input() coming: string = 'COMING SOON';
}
