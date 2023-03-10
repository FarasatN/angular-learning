import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionDemoComponent } from './expansion-demo.component';

describe('ExpansionDemoComponent', () => {
  let component: ExpansionDemoComponent;
  let fixture: ComponentFixture<ExpansionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
