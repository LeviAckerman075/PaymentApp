import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {Router} from '@angular/router';
import { environment } from 'src/environment';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  phoneNumber: string = '';
  reCaptchaVerifier: any;
  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}
  ngOnInit(){
    firebase.initializeApp(environment.firebaseConfig);
  }
  sendOtp() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button', {size: 'invisible'}
    );
    firebase.auth().signInWithPhoneNumber(
      this.phoneNumber,
      this.reCaptchaVerifier
    ).then((val)=>{
      localStorage.setItem('verificationId', JSON.stringify(
        val.verificationId
      ));
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
