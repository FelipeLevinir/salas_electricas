import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoIngeapAgroComponent } from './contacto-ingeap-agro.component';

describe('ContactoIngeapAgroComponent', () => {
  let component: ContactoIngeapAgroComponent;
  let fixture: ComponentFixture<ContactoIngeapAgroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoIngeapAgroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoIngeapAgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
