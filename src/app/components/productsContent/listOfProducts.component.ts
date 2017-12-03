import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../data/product';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'list-of-products',
  templateUrl: './listOfProducts.component.html',
  styleUrls: ['./listOfProducts.component.css']
})
export class ListOfProductsComponent {
  @Input() products: Product;
  @Input() currentPage = 1;
  @Input() numberOfPages: number;
  @Output() currentPageEmiter = new EventEmitter<number>();

  currentProduct: Product = new Product('', '', '', 0, '');


  constructor(private productService: ProductService) {
  }

  selectProduct(product: Product) {
    this.currentProduct = product;
  }

  addProduct() {
    this.currentProduct = new Product('', '', '', 0, '');
  }

  changePage(page: number): void {
    this.currentPageEmiter.emit(page);
  }

  editProduct() {
    if (this.currentProduct._id === '') {
      this.productService.addProduct(this.currentProduct).subscribe();
    } else {
      this.productService.editProduct(this.currentProduct).subscribe();
    }
  }
}


