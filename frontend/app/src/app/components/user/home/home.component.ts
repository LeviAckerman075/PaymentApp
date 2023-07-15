import { Component } from '@angular/core';
import { PhoneNumberHandlerService } from 'src/app/services/phone-number-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  phoneNumber: string = '';
  constructor(
    private phoneNumberHandler: PhoneNumberHandlerService
  ){
    this.phoneNumber = phoneNumberHandler.getNumber();
    
  }
}
