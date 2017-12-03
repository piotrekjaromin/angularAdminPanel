import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './components/main/app.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {TopNavComponent} from './components/topNav/topNav.component';
import {LoginComponent} from './components/login/login.component';
import {OrderService} from './services/order.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ListOfProductsComponent} from './components/productsContent/listOfProducts.component';
import {LeftMenuComponent} from './components/leftMenu/leftMenu.component';
import {ProductService} from './services/product.service';
import {OrderComponent} from "./components/order/order.component";
import {ViewService} from "./services/view.service";
import {LogoutComponent} from "./components/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent,
    DashboardComponent,
    ListOfProductsComponent,
    LeftMenuComponent,
    OrderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, OrderService, ProductService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
