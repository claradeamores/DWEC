import { TestBed } from '@angular/core/testing';

import { PersonajesListService } from './personajes-list.service';

describe('PersonajesListService', () => {
  let service: PersonajesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
