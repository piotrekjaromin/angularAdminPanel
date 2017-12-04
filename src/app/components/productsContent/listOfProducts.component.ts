import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../data/product';
import {ProductService} from "../../services/product.service";
import {SocketService} from "../../services/socket.service";

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

  currentProduct: Product = new Product('', '', '', 0, '', 0);


  constructor(private productService: ProductService, private socketService: SocketService) {
  }

  selectProduct(product: Product) {
    this.currentProduct = product;
    console.log(product);
    console.log(product.promotionPrice);
  }

  prepareProductToAdd() {
    this.currentProduct = new Product('', '', '', 0, '', 0);
  }

  changePage(page: number): void {
    this.currentPageEmiter.emit(page);
  }

  addProduct() {
      this.productService.addProduct(this.currentProduct).subscribe();
      this.socketService.sendMessage('addProduct', 'Added new product: ' + this.currentProduct.name);
  }

  editProduct() {
      this.productService.editProduct(this.currentProduct).subscribe();
      this.socketService.sendMessage('editProduct', 'Edited product: ' + this.currentProduct.name);
  }

  addPromotion() {
    this.productService.addPromotion(this.currentProduct).subscribe();
    this.socketService.sendMessage('addPromotion', 'Added promotion to product: ' + this.currentProduct.name);
  }

  removePromotion(product) {
    product.promotionPrice = 0;
    this.productService.removePromotion(product).subscribe();
    this.socketService.sendMessage('removePromotion', 'Removed promotion of product: ' + product.name);
  }
}


