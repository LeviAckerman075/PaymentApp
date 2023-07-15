import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {Router, NavigationExtras } from '@angular/router';
import { OtpHandlerService } from 'src/app/services/otp-handler.service';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp: string = '';
  verify: string = '';
  constructor(
    private router: Router,
    private otpHandler: OtpHandlerService
  ){}
  ngOnInit(){
    this.verify = this.otpHandler.getId();
  }
  verifyOtp(){
    var credentials = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );
    firebase.auth().signInWithCredential(credentials).then((res)=>{
      console.log(res);
      this.router.navigate(['/userHome']);
    });
  }
}