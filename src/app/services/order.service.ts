import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, RequestOptions,  Response, Headers} from '@angular/http';
import {Order} from '../data/order';

@Injectable()
export class OrderService {
  getProductHttp = 'http://localhost:5000/orders';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  getOrders() {
    return this.http.get(this.getProductHttp);
  }

  getRealizedOrders(token: string) {
    const headers = new Headers({'token': token});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.getProductHttp + '/realized', options).map((response: Response) => response.json());
  }

  getNotRealizedOrders(token: string) {
    const headers = new Headers({'token': token});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.getProductHttp + '/notrealized', options).map((response: Response) => response.json());
  }

  approveOrder(token: string, order: Order) {
    const headers = new Headers({'token': token});
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.getProductHttp + '/approve', order, options);
  }


}
