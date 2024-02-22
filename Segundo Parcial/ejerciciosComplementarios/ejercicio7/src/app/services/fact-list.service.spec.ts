import { TestBed } from '@angular/core/testing';

import { FactListService } from './fact-list.service';

describe('FactListService', () => {
  let service: FactListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
