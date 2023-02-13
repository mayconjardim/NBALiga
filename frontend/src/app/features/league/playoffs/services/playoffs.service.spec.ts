import { TestBed } from '@angular/core/testing';

import { PlayoffsService } from './playoffs.service';

describe('PlayoffsService', () => {
  let service: PlayoffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayoffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
