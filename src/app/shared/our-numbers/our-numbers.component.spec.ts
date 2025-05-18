import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNumbersComponent } from './our-numbers.component';

describe('OurNumbersComponent', () => {
  let component: OurNumbersComponent;
  let fixture: ComponentFixture<OurNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
