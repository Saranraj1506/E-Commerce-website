import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSiginUpComponent } from './customer-sigin-up.component';

describe('CustomerSiginUpComponent', () => {
  let component: CustomerSiginUpComponent;
  let fixture: ComponentFixture<CustomerSiginUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerSiginUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSiginUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
