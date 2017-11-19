import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {User} from '../data/user';

@Injectable()
export class UserService {
   getProductHttp = 'http://localhost:5500/users/login';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  login(login: string, password: string) {
    return this.http.post(this.getProductHttp, new User(login, password))
      .map(response => response.json());
  }


}
