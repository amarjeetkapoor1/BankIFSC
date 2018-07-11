import { TestBed, inject } from '@angular/core/testing';

import { IFSCCodeService } from './ifsccode.service';

describe('IFSCCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IFSCCodeService]
    });
  });

  it('should be created', inject([IFSCCodeService], (service: IFSCCodeService) => {
    expect(service).toBeTruthy();
  }));
});
