import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDisplayComponent } from './investment-display.component';

describe('InvestmentDisplayComponent', () => {
  let component: InvestmentDisplayComponent;
  let fixture: ComponentFixture<InvestmentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
