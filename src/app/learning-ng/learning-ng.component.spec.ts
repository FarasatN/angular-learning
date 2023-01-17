import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningNgComponent } from './learning-ng.component';

describe('LearningNgComponent', () => {
  let component: LearningNgComponent;
  let fixture: ComponentFixture<LearningNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
