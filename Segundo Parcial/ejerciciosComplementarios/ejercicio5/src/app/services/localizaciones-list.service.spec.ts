import { TestBed } from '@angular/core/testing';

import { LocalizacionesListService } from './localizaciones-list.service';

describe('LocalizacionesListService', () => {
  let service: LocalizacionesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizacionesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
