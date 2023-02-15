import { TestBed } from '@angular/core/testing';

import { BoxscoreService } from './boxscore.service';

describe('BoxscoreService', () => {
  let service: BoxscoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxscoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
