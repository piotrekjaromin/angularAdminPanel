import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Product} from '../data/product';

@Injectable()
export class ProductService {
  getProductHttp = 'http://localhost:5000/products';

  constructor(private http: Http) {
  }

  getProducts(categories: string[], page: number, priceFrom: number, priceTo: number, productName: string) {
    return this.http
      .get(this.getProductHttp +
        '/name/' + productName +
        '/categories/' + categories +
        '/page/' + page +
        '/pricefrom/' + priceFrom +
        '/priceTo/' + priceTo)
      .map((response: Response) => response.json());
  }

  getCategories() {
    return this.http.get(this.getProductHttp + '/categories').map((response: Response) => response.json());
  }

  getProductsNumber(categories: string[], priceFrom: number, priceTo: number, productName: string) {
    return this.http
      .get(this.getProductHttp +
        '/name/' + productName +
        '/categories/' + categories +
        '/pricefrom/' + priceFrom +
        '/priceTo/' + priceTo +
        '/quantity')
      .map((response: Response) => response);
  }

  editProduct(product: Product) {
    const headers = new Headers({'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http
      .put(this.getProductHttp, product, options);
  }

  addProduct(product: Product) {
    const headers = new Headers({'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http
      .post(this.getProductHttp, product, options);
  }

  addPromotion(product: Product) {
    const headers = new Headers({'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http
      .put(this.getProductHttp + '/promotion/add', product, options);
  }

  removePromotion(product: Product) {
    const headers = new Headers({'token': sessionStorage.getItem('token')});
    const options = new RequestOptions({headers: headers});
    return this.http
      .put(this.getProductHttp + '/promotion/remove', product, options);
  }

}
