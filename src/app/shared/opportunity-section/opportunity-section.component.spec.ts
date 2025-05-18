import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySectionComponent } from './opportunity-section.component';

describe('OpportunitySectionComponent', () => {
  let component: OpportunitySectionComponent;
  let fixture: ComponentFixture<OpportunitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
