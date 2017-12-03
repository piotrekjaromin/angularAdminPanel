import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, Headers} from '@angular/http';
import {User} from '../data/user';

@Injectable()
export class UserService {
   getProductHttp = 'http://localhost:5000/users';
  // getProductHttp = 'http://localhost:2403/users/login';

  constructor(private http: Http) { }

  login(user: User) {
    console.log(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions(headers);
    return this.http.post(this.getProductHttp + '/login/admin', user, options);
  }

  logout(token: string) {
    let headers = new Headers({'token': token});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.getProductHttp + '/logout', null, options);
  }

}
