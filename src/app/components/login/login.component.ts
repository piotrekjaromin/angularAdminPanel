import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username = 'fghdfgh';
  password = 'asdfasdf';

  constructor(private userService: UserService) {
  }


  insertUsername(event: any) {
    this.username = event.target.value;
  }

  insertPassword(event: any) {
    this.password = event.target.value;
  }

  login() {
    this.userService.login(this.username, this.password);
  }
}
