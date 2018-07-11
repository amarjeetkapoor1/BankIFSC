import { TestBed, inject } from '@angular/core/testing';

import { BankDataService } from './bank-data.service';

describe('BankDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankDataService]
    });
  });

  it('should be created', inject([BankDataService], (service: BankDataService) => {
    expect(service).toBeTruthy();
  }));
});
