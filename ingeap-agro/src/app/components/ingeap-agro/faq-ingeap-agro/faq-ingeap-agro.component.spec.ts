import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqIngeapAgroComponent } from './faq-ingeap-agro.component';

describe('FaqIngeapAgroComponent', () => {
  let component: FaqIngeapAgroComponent;
  let fixture: ComponentFixture<FaqIngeapAgroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqIngeapAgroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqIngeapAgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
