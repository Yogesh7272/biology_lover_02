import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule {}
