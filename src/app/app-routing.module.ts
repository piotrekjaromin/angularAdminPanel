import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './components/main/app.component';
import {LoginComponent} from './components/login/login.component';
import {TopNavComponent} from './components/topNav/topNav.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LoginComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginComponent
  ],
})

export class AppRoutingModule {}
