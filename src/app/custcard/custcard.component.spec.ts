import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcardComponent } from './custcard.component';

describe('CustcardComponent', () => {
  let component: CustcardComponent;
  let fixture: ComponentFixture<CustcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustcardComponent]
    });
    fixture = TestBed.createComponent(CustcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
