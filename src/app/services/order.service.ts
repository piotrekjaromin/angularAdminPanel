import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {User} from '../data/user';

@Injectable()
export class OrderService {
  getProductHttp = 'http://localhost:5500/orders';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  getOrders() {
    return this.http.get(this.getProductHttp)
      .map(response => response.json()).subscribe(
        data => console.log(data),
        err => console.log('error: ' + err),
        () => console.log('other')
      );
  }


}
