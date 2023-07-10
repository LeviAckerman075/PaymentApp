import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  phoneNumber: Number | null = null;
  constructor(private httpService: HttpService) {}
  sendOtp() {
    if (this.phoneNumber != null)
      this.httpService.postOtp(this.phoneNumber).subscribe((val) => {
        console.log(val.msg);
      });
    this.phoneNumber = null;
  }
}
