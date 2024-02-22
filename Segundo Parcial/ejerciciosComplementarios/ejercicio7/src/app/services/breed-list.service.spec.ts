import { TestBed } from '@angular/core/testing';

import { BreedListService } from './breed-list.service';

describe('BreedListService', () => {
  let service: BreedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
