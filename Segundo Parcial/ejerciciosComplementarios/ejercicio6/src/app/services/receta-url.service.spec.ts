import { TestBed } from '@angular/core/testing';

import { RecetaUrlService } from './receta-url.service';

describe('RecetaUrlService', () => {
  let service: RecetaUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
