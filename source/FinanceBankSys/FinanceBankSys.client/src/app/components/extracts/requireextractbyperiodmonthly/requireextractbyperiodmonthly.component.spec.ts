import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireextractbyperiodmonthlyComponent } from './requireextractbyperiodmonthly.component';

describe('RequireextractbyperiodmonthlyComponent', () => {
  let component: RequireextractbyperiodmonthlyComponent;
  let fixture: ComponentFixture<RequireextractbyperiodmonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequireextractbyperiodmonthlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequireextractbyperiodmonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
