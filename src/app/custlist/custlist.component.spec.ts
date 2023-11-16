import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlistComponent } from './custlist.component';

describe('CustlistComponent', () => {
  let component: CustlistComponent;
  let fixture: ComponentFixture<CustlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustlistComponent]
    });
    fixture = TestBed.createComponent(CustlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
