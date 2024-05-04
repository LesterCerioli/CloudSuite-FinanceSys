import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireextractbydayComponent } from './requireextractbyday.component';

describe('RequireextractbydayComponent', () => {
  let component: RequireextractbydayComponent;
  let fixture: ComponentFixture<RequireextractbydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequireextractbydayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequireextractbydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
