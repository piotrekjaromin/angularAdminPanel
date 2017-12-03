import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewService} from "../../services/view.service";

@Component({
  selector: 'top-nav',
  templateUrl: './topNav.component.html',
  styleUrls: ['./topNav.component.css']
})
export class TopNavComponent {
  constructor(private viewService: ViewService) {}

  changeView(view: string) {
    this.viewService.setView(view);
  }
}
