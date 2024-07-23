import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngeapComponent } from './ingeap.component';

describe('IngeapComponent', () => {
  let component: IngeapComponent;
  let fixture: ComponentFixture<IngeapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngeapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
