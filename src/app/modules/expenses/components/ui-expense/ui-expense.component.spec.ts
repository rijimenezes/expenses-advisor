import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExpenseComponent } from './ui-expense.component';

describe('UiExpenseComponent', () => {
  let component: UiExpenseComponent;
  let fixture: ComponentFixture<UiExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
