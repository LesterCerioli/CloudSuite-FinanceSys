import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSchedullingComponent } from './payment-schedulling.component';

describe('PaymentSchedullingComponent', () => {
  let component: PaymentSchedullingComponent;
  let fixture: ComponentFixture<PaymentSchedullingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentSchedullingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentSchedullingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
