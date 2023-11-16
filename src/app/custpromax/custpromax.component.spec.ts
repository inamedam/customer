import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustpromaxComponent } from './custpromax.component';

describe('CustpromaxComponent', () => {
  let component: CustpromaxComponent;
  let fixture: ComponentFixture<CustpromaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustpromaxComponent]
    });
    fixture = TestBed.createComponent(CustpromaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
