import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000/otp/';
  constructor(private http: HttpClient) {}
  postOtp(phoneNumber: Number): Observable<{ success: boolean; msg: String }> {
    const url = this.url + 'request-otp';
    return this.http.post<{ success: boolean; msg: String }>(url, {
      phoneNumber,
    });
  }
}
