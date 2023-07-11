import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {Router} from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp: string = '';
  verify: string = '';
  constructor(private router: Router){}
  ngOnInit(){
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
  }
  otpConfig={
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px'
    }
  };

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
