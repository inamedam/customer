import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlistproComponent } from './custlistpro.component';

describe('CustlistproComponent', () => {
  let component: CustlistproComponent;
  let fixture: ComponentFixture<CustlistproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustlistproComponent]
    });
    fixture = TestBed.createComponent(CustlistproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
