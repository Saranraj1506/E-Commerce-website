import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs';
import{Observable}from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'http://localhost:5555';

  constructor(

    private http: HttpClient,
    private router: Router
  ) { }

   /* Customer Registeration */
   signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //customer login
  customerSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }
//once we logged in that time we are storing customer id into token 
storeCustomerAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

getCustomerAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
}

storeCustomerUserName(name: string): void {
  localStorage.setItem("userName", name);
}
storeCustomerUserAddress(name: string): void {
  localStorage.setItem("address", name);
}

getCustomerAddress(): any {
  const address = localStorage.getItem("address");
  return address;
}
getCustomerName(): any {
  const name = localStorage.getItem("userName");
  return name;
}

customerLogout(): void {
  localStorage.clear();
  this.router.navigate(['']);
}
//admin login
adminSignIn(body: any): Observable<any> {
  return this.http.post(this.url + "/api/admin/login", body);
}
storeAdminAuthorization(token: string): void {
  localStorage.setItem("admin", token);
}
getAdminAuthorization(): any {
  const token = localStorage.getItem("admin");
  return token; 
}

storeAdminUserName(name: string): void {
  localStorage.setItem("adminName", name);
}
storeAdminEmail(name: string): void {
  localStorage.setItem("adminEmail", name);
}

getAdminEmail(): any {
  const name = localStorage.getItem("adminEmail");
  return name;
}
getAdminName(): any {
  const name = localStorage.getItem("adminName");
  return name;
}

adminLogout(): void {
  localStorage.clear();
  this.router.navigate(['/']);
}
//product controller
addProduct(body: any): Observable<any> {
  return this.http.post(this.url + "/api/products/addProduct", body);
}

getProductlist():Observable<any> {
  return this.http.get(this.url + "/api/products");
}

deleteProduct(id :any):Observable<any> {
  //return this.http.delete(this.url + "/api/products/" +id);
  //secondway
  return this.http.delete(`${this.url}/api/products/${id}`);
}

getProductById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/products/"+id);
}

editProduct(body: any,id:any): Observable<any> {
  return this.http.put(this.url + "/api/products/"+id, body);
}
//category

// New method to get category list
getCategoryList(): Observable<any> {
  return this.http.get(this.url + "/api/categories");
}

//cart 
addToCart(body: any,pid:any,cid:any):Observable<any>{
  return this.http.post(this.url+"/api/carts/"+cid+"/"+pid,body);
}

getCustomerById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/customers/customer/"+id);
}

cartList():Observable<any>{
  return this.http.get(this.url+"/api/carts/list");
}
deleteCart(id: any): Observable<void> {
  return this.http.delete<void>(`${this.url}/api/carts/${id}`);////
}
//order
placeOrder(cid:any,cartid:any,body:any):Observable<any> {
  return this.http.post(this.url + "/api/orders/"+cid+"/"+cartid, body);
}

getAllorderList():Observable<any>{
  return this.http.get(this.url+"/api/orders");
}


orderList(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/"+id);
}
orderListByCustomer(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/customer/"+id);
}

isCustomerLoginPresent(): void {
  if (this.getCustomerAuthorization() === null) {
    this.router.navigate(['/customer-login']);
  }
}

isAdminLoginPresent(): void {
  if (this.getAdminAuthorization() === null) {
    this.router.navigate(['/admin-login']);
  }
}

forgotPassword(body: any):Observable<any> {
  return this.http.post(this.url + "/api/customers/forgotpassword", body);
}

updateCustomerInformation(body: any):Observable<any> {
  return this.http.put(this.url + "/api/customers/customer/"+body?.customerId, body);
}

changePassword(cid: any,password:any):Observable<any> {
  return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
}

getProductByCategory(cid: any, offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products");
}

getAllProducts(offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products");
}

placeOrderItem(cid:any, body:any):Observable<any>{
  console.log(body);
  return this.http.post(`${this.url}/api/orders/createOrder/${cid}`, body);
}

getAllProductsByCategory(categoryId:any): Observable<any> {
  console.log(categoryId)
  const url = `${this.url}/api/products/category/${categoryId.id}`;

  return this.http.get(url);
}
 

}
