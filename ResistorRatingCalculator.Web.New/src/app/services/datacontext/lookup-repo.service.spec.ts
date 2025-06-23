import { TestBed, inject } from '@angular/core/testing';

import { LookupRepoService } from './lookup-repo.service';

describe('LookupRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookupRepoService]
    });
  });

  it('should be created', inject([LookupRepoService], (service: LookupRepoService) => {
    expect(service).toBeTruthy();
  }));
});
