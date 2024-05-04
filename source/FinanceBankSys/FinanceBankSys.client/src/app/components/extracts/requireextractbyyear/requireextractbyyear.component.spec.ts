import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireextractbyyearComponent } from './requireextractbyyear.component';

describe('RequireextractbyyearComponent', () => {
  let component: RequireextractbyyearComponent;
  let fixture: ComponentFixture<RequireextractbyyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequireextractbyyearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequireextractbyyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
