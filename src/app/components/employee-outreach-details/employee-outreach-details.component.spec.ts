import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOutreachDetailsComponent } from './employee-outreach-details.component';

describe('EmployeeOutreachDetailsComponent', () => {
  let component: EmployeeOutreachDetailsComponent;
  let fixture: ComponentFixture<EmployeeOutreachDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOutreachDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOutreachDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
