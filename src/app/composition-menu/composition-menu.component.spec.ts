import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionMenuComponent } from './composition-menu.component';

describe('CompositionMenuComponent', () => {
  let component: CompositionMenuComponent;
  let fixture: ComponentFixture<CompositionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompositionMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompositionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
