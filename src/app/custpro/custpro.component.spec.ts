import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustproComponent } from './custpro.component';

describe('CustproComponent', () => {
  let component: CustproComponent;
  let fixture: ComponentFixture<CustproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustproComponent]
    });
    fixture = TestBed.createComponent(CustproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
