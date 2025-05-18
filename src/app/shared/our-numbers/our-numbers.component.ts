import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-our-numbers',
  imports: [CommonModule],
  templateUrl: './our-numbers.component.html',
  styleUrl: './our-numbers.component.css'
})
export class OurNumbersComponent {
  stats = [
    { label: 'Active Users', value: 1, suffix: 'M+' },
    { label: 'Assessments', value: 12000, suffix: 'K+' },
    { label: 'Opportunities', value: 1300, suffix: 'K+' },
    { label: 'Brands trust us', value: 200, suffix: '+' },
    { label: 'Organisations', value: 42000, suffix: 'K+' },
    { label: 'Countries', value: 78, suffix: '+' }
  ];

  @ViewChildren('statElement') statElements!: QueryList<ElementRef>;

  animated: boolean[] = [];

  ngAfterViewInit() {
    this.animated = new Array(this.stats.length).fill(false);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number((entry.target as HTMLElement).getAttribute('data-index'));

        if (entry.isIntersecting && !this.animated[index]) {
          const countUp = new CountUp(entry.target as HTMLElement, this.stats[index].value, {
            duration: 2,
            separator: ',',
            suffix: this.stats[index].suffix
          });

          if (!countUp.error) {
            countUp.start();
            this.animated[index] = true;
          } else {
            console.error(countUp.error);
          }
        }
      });
    }, {
      threshold: 0.5, // start when 50% visible
    });

    this.statElements.forEach((el: { nativeElement: Element; }, index: { toString: () => any; }) => {
      el.nativeElement.setAttribute('data-index', index.toString());
      observer.observe(el.nativeElement);
    });
  }
}