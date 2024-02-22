import { TestBed } from '@angular/core/testing';

import { FactsListService } from './facts-list.service';

describe('FactsListService', () => {
  let service: FactsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
