import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcFormComponent } from './upc-form.component';

describe('UpcFormComponent', () => {
  let component: UpcFormComponent;
  let fixture: ComponentFixture<UpcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
