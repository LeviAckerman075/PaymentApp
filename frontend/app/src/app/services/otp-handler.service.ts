import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpHandlerService {
  phoneNumber: string = '';
  constructor() { }
  setId(phoneNumber: string, verificationId: any){
    this.phoneNumber = phoneNumber;
    localStorage.setItem(`verificationId${this.phoneNumber}`, JSON.stringify(
      verificationId
    ));
  }
  getId(): string{
    return JSON.parse(localStorage.getItem(`verificationId${this.phoneNumber}`) || '{}');
  }
}
