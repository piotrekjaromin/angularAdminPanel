import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../services/user.service';
import {OrderService} from '../../services/order.service';
import {User} from '../../data/user';
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username: string;
  password: string;
  status: string;
  message: string;


  constructor(private userService: UserService, private orderService: OrderService, private viewService: ViewService) {
  }


  insertUsername(event: any) {
    this.username = event.target.value;
  }

  insertPassword(event: any) {
    this.password = event.target.value;
  }

  login() {
    console.log(this.username);
    console.log(Md5.hashStr(this.password).toString());
    console.log(this.password);
    this.userService.login(new User(this.username, Md5.hashStr(this.password).toString(), '')).subscribe(p => {
          if (p.status === 200) {
            this.status = 'success';
            sessionStorage.setItem('token', p.text());
            this.viewService.setView('buttons');
          } else {
            this.status = 'failure';
          }
        }
      );
  }

  getOrders() {
    this.orderService.getOrders();
  }
}
