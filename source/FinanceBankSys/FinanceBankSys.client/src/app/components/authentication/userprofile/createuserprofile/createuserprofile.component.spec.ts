import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserprofileComponent } from './createuserprofile.component';

describe('CreateuserprofileComponent', () => {
  let component: CreateuserprofileComponent;
  let fixture: ComponentFixture<CreateuserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateuserprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
