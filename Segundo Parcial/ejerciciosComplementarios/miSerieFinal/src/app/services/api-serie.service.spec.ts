import { TestBed } from '@angular/core/testing';

import { ApiSerieService } from './api-serie.service';

describe('ApiSerieService', () => {
  let service: ApiSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
