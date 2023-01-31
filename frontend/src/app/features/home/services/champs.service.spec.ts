/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChampsService } from './champs.service';

describe('Service: Champs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChampsService]
    });
  });

  it('should ...', inject([ChampsService], (service: ChampsService) => {
    expect(service).toBeTruthy();
  }));
});
