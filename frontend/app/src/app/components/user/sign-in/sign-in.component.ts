import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {Router} from '@angular/router';
import { environment } from 'src/environment';
import { OtpHandlerService } from 'src/app/services/otp-handler.service';
import { PhoneNumberHandlerService } from 'src/app/services/phone-number-handler.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  phoneNumber: string = '';
  // reCaptchaVerifier: any;
  constructor(
    private otpHandler: OtpHandlerService,
    private router: Router,
    private phoneNumberHandler: PhoneNumberHandlerService
  ) {}
  ngOnInit(){
    firebase.initializeApp(environment.firebaseConfig);
  }
  sendOtp() {
    const reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button', {size: 'invisible'}
    );
    firebase.auth().signInWithPhoneNumber(
      this.phoneNumber,
      reCaptchaVerifier
    ).then((val)=>{
      this.phoneNumberHandler.setNumber(this.phoneNumber);
      this.otpHandler.setId(this.phoneNumber, val.verificationId);
      this.router.navigate(['/otpVerify']);
    }).catch((error)=>{
      alert(error.message);
      setTimeout(()=>{
        window.location.reload()
      }, 5000);
    })
    this.phoneNumber = '';
  }
}
