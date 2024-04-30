import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutCommandeComponent } from './debut-commande.component';

describe('DebutCommandeComponent', () => {
  let component: DebutCommandeComponent;
  let fixture: ComponentFixture<DebutCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebutCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebutCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
