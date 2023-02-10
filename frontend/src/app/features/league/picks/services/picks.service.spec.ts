import { TestBed } from '@angular/core/testing';

import { PicksService } from './picks.service';

describe('PicksService', () => {
  let service: PicksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
