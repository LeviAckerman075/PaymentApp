import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberHandlerService {
  phoneNumber: string = '';
  constructor() { }
  getNumber(): string{
    return this.phoneNumber;
  }
  setNumber(phoneNumber: string){
    this.phoneNumber = phoneNumber;
  }
}
