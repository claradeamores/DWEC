import { TestBed } from '@angular/core/testing';

import { ServicioSerieService } from './servicio-serie.service';

describe('ServicioSerieService', () => {
  let service: ServicioSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
