import { TestBed } from '@angular/core/testing';

import { ServicioPlanetTsService } from './servicio.planet.ts.service';

describe('ServicioPlanetTsService', () => {
  let service: ServicioPlanetTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlanetTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
