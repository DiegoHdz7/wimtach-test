import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedFormComponent } from './grouped-form.component';

describe('GroupedFormComponent', () => {
  let component: GroupedFormComponent;
  let fixture: ComponentFixture<GroupedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
