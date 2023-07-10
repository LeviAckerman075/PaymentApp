import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsertypeComponent } from './components/usertype/usertype.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertypeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
