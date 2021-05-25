import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentOfficesComponent } from './employment-offices.component';

describe('EmploymentOfficesComponent', () => {
  let component: EmploymentOfficesComponent;
  let fixture: ComponentFixture<EmploymentOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
