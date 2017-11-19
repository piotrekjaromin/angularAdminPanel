import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {UserService} from '../../services/user.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username = 'fghdfgh';
  password = 'asdfasdf';

  constructor(private userService: UserService, private orderService: OrderService) {
  }


  insertUsername(event: any) {
    this.username = event.target.value;
  }

  insertPassword(event: any) {
    this.password = event.target.value;
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(
      data => console.log('id: ' + data['id'] + ' uid ' + data['uid']),
      err => console.log('error: ' + err),
      () => console.log('other')
    );
  }

  getOrders() {
    this.orderService.getOrders();
  }
}
