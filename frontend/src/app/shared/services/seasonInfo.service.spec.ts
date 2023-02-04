/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeasonInfoService } from './seasonInfo.service';

describe('Service: SeasonInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonInfoService]
    });
  });

  it('should ...', inject([SeasonInfoService], (service: SeasonInfoService) => {
    expect(service).toBeTruthy();
  }));
});
