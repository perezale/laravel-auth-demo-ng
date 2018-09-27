import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: NavigationComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }