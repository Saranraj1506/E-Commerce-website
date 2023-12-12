import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Category } from '../model/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  getCategoryList: Category[] = [];

  constructor(
    private route: Router,
    private prService: ProductsService,
  ) {
    // this.prService.isCustomerLoginPresent();
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.prService.getCategoryList().subscribe(
      (categories: Category[]) => {
        this.getCategoryList = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  gotoLogin(category: Category): void {
    console.log('Selected category:', category);
    // Navigate to the desired route (e.g., customer login with a category parameter)
    this.route.navigate(['/customer-login'], { queryParams: { category: category.name } });
  }
}
