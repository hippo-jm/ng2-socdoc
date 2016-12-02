/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetectService } from './detect.service';

describe('DetectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectService]
    });
  });

  it('should ...', inject([DetectService], (service: DetectService) => {
    expect(service).toBeTruthy();
  }));
});
