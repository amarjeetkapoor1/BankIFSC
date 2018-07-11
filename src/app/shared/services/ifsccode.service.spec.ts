import { TestBed, inject } from '@angular/core/testing';

import { IfscCodeService } from './ifsccode.service';

describe('IFSCCodeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [IfscCodeService]
        });
    });

    it('should be created', inject([IfscCodeService], (service: IfscCodeService) => {
        expect(service).toBeTruthy();
    }));
});
