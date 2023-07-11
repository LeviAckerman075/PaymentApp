import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsertypeComponent } from './components/usertype/usertype.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environment';
import { OtpVerificationComponent } from './components/user/otp-verification/otp-verification.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { HomeComponent } from './components/user/home/home.component';
@NgModule({
  declarations: [AppComponent, UsertypeComponent, SignInComponent, OtpVerificationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
