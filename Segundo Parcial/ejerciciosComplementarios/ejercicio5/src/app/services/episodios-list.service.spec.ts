import { TestBed } from '@angular/core/testing';

import { EpisodiosListService } from './episodios-list.service';

describe('EpisodiosListService', () => {
  let service: EpisodiosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodiosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
