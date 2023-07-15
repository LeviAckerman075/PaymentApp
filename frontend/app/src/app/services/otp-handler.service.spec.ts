import { TestBed } from '@angular/core/testing';

import { OtpHandlerService } from './otp-handler.service';

describe('OtpHandlerService', () => {
  let service: OtpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
