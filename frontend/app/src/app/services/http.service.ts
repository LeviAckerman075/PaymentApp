import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3000/otp/';
  constructor(private http: HttpClient) {}
  postVerifyId(phoneNumber: string): Observable<{ success: boolean; msg: string }> {
    const url = this.url + 'request-otp';
    return this.http.post<{ success: boolean; msg: string }>(url, {
      phoneNumber,
    });
  }
}
