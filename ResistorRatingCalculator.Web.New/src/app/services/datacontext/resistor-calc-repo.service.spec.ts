import { TestBed, inject } from '@angular/core/testing';

import { ResistorCalcRepoService } from './resistor-calc-repo.service';

describe('ResistorCalcRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResistorCalcRepoService]
    });
  });

  it('should be created', inject([ResistorCalcRepoService], (service: ResistorCalcRepoService) => {
    expect(service).toBeTruthy();
  }));
});
