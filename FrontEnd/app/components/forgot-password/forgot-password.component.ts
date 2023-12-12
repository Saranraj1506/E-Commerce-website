import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {


  email: string= '';
  isShowChangePassword: boolean = false;
  newPassword: string = '';
  customer: any;
  constructor(
    private prService: ProductsService,
    private route:Router
  ) {}
    ngOnInit ():void{ }


onSubmit(): void {
  const body = {
    emailID: this.email
  };
  this.prService.forgotPassword(body).pipe(take(1)).subscribe((res) => {
    if (!!res && res?.customerId) {
      this.customer = res;
      this.isShowChangePassword = true;
    }
  }, err => {
    this.isShowChangePassword = false;
    alert("Customer not found . Please check email address.")
  });
}

onChangePassword(): void {
  this.customer.password = this.newPassword;
  this.prService.changePassword(this.customer?.customerId,this.newPassword).pipe(take(1)).subscribe((res) => {
    if (res && res.customerId) {
      alert("Password has been change successfully");
      this.route.navigate(["/customer-login"]);
    }
  }, error => {
    alert("Error occured while change password.");
  });
}


}
