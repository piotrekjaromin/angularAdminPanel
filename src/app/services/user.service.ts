import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {User} from '../data/user';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {
   getProductHttp = 'http://localhost:5500/users/login';
  // getProductHttp = 'http://localhost:2403/users/login';

  private responseIdSource: BehaviorSubject<string> = new BehaviorSubject('');
  responseId = this.responseId.asObservable();

  private responseUidSource: BehaviorSubject<string> = new BehaviorSubject('');
  responseUid = this.responseUid.asObservable();

  private statusSource: BehaviorSubject<string> = new BehaviorSubject('');
  status = this.statusSource.asObservable();


  constructor(private http: Http) { }

  login(login: string, password: string) {
    return this.http.post(this.getProductHttp, new User(login, password))
      .map(response => response.json())
      .subscribe(
        data => {
          this.responseIdSource.subscribe();
          this.responseUidSource.subscribe();
          this.responseIdSource.next('asdf');
          this.responseUidSource.next('asdf');
        },
            err => console.log('error: ' + err),
        () => console.log('other')
      );
  }

}
