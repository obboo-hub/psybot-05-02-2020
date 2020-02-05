import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from  './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

import {LoggedInGuard} from 'ngx-auth-firebaseui';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: Page1Component },
    { path: 'page2', component: Page2Component ,canActivate: [LoggedInGuard]},
    { path: 'page3', component: Page3Component  ,canActivate: [LoggedInGuard]},
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
