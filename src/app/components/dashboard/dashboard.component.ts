import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../data/product';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit{
  selectedCategories: string[] = [];
  numberOfPages: number;
  products: Product[] = []
  currentPage = 1;
  priceFrom: number;
  priceTo: number;
  productName: string;

  getName(name: string) {
    this.productName = name;
    console.log(this.productName);
    this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
    this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
  }

  getPriceFrom(price) {
    this.priceFrom = price;
    this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
    this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
  }

  getPriceTo(price) {
    this.priceTo = price;
    this.getNumberOfPages(this.selectedCategories, this.priceFrom, this.priceTo, this.productName);
    this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
  }

  changeSelectedCategory(categories: string[]): void {
    this.selectedCategories = categories;
    this.getNumberOfPages(categories, this.priceFrom, this.priceTo, this.productName);
    this.getProducts(this.selectedCategories, 1, this.priceFrom, this.priceTo, this.productName);
    this.currentPage = 1;
  }

  pagination(page: number) {
    this.currentPage = this.currentPage + page;
    if (this.currentPage > this.numberOfPages) { this.currentPage = this.numberOfPages; }
    if (this.currentPage < 1) { this.currentPage = 1; }
    this.getProducts(this.selectedCategories, this.currentPage, this.priceFrom, this.priceTo, this.productName);
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.priceFrom = -1;
    this.priceTo = 9999999;
    this.productName = ' ';
    this.productService.getCategories().subscribe(data => {
      this.selectedCategories = data;
      this.getProducts(data, 1, this.priceFrom, this.priceTo, ' ');
      this.getNumberOfPages(data, this.priceFrom, this.priceTo, ' ');
    });
  }


  getNumberOfPages(categories: string[], priceFrom: number, priceTo: number, productName: string) {
    this.productService.getProductsNumber(categories, priceFrom, priceTo, productName)
      .subscribe(numberOfPages => this.numberOfPages = numberOfPages['_body']);
  }

  getProducts(categories: string[], currentPage: number, priceFrom: number, priceTo: number, productName: string) {
    this.productService.getProducts(categories, currentPage, priceFrom, priceTo, productName).subscribe(products =>
      this.products = products);
  }
}

