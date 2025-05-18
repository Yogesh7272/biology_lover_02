import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { OurNumbersComponent } from '../../shared/our-numbers/our-numbers.component';
import { OpportunitySectionComponent } from '../../shared/opportunity-section/opportunity-section.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,OurNumbersComponent,OpportunitySectionComponent,CardComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
