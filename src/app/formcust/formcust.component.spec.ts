import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcustComponent } from './formcust.component';

describe('FormcustComponent', () => {
  let component: FormcustComponent;
  let fixture: ComponentFixture<FormcustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcustComponent]
    });
    fixture = TestBed.createComponent(FormcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
