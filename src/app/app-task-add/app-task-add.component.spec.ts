import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskAddComponent } from './app-task-add.component';

describe('AppTaskAddComponent', () => {
  let component: AppTaskAddComponent;
  let fixture: ComponentFixture<AppTaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTaskAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
