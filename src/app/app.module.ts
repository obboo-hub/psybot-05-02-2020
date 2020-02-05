import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    
    Page1Component,
    Page2Component,
    Page3Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
