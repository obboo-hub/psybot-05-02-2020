import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login.component'
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBWMdDptg82YiZ6T-ABO9SGFrW2TsQBg6Y",
    authDomain: "angularbot-xriovy.firebaseapp.com",
    databaseURL: "https://angularbot-xriovy.firebaseio.com",
    projectId: "angularbot-xriovy",
    storageBucket: "angularbot-xriovy.appspot.com",
    messagingSenderId: "601277311561",
  })
  ],
  exports: [ LoginComponent ], // <-- export here
  providers: []
})
export class LoginModule { }
