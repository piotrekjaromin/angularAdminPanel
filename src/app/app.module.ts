import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './components/main/app.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {TopNavComponent} from './components/topNav/topNav.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
