import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  view = 'buttons';

  ngOnInit() {
    this.viewService.view.subscribe(view =>
      this.view = view);
  }

  constructor(private viewService: ViewService) {}

  changeView(view: string) {
    this.viewService.setView(view);
  }

}
