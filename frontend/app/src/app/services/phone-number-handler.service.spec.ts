import { TestBed } from '@angular/core/testing';

import { PhoneNumberHandlerService } from './phone-number-handler.service';

describe('PhoneNumberHandlerService', () => {
  let service: PhoneNumberHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
