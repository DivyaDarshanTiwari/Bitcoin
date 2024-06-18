import { TestBed } from '@angular/core/testing';

import { BitCoinServiceService } from './bit-coin-service.service';

describe('BitCoinServiceService', () => {
  let service: BitCoinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitCoinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
