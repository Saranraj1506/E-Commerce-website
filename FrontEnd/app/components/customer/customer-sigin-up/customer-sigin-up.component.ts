import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-sigin-up',
  templateUrl: './customer-sigin-up.component.html',
  styleUrl: './customer-sigin-up.component.css'
})
export class CustomerSiginUpComponent {

  //customer = '';
  username = '';
  firstname = '';
  lastname = '';
  address = '';
  password = '';
  phone = '';
  emailID = '';

  constructor(private prService: ProductsService, private router: Router) { }

  signup(): void {
    let req = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      address: this.address,
      password: this.password,
      phone_number: this.phone,
      emailID: this.emailID
    }
    // Call your service method to perform the signup
    this.prService.signUp(req).subscribe(
      (response) => {
        alert('Customer created');
        this.router.navigate(['/customer-login'])
        console.log('Signup successful', response);
      },
      (error) => {
        // Handle signup error
        console.error('Signup error', error);
      }
    );
  }
}