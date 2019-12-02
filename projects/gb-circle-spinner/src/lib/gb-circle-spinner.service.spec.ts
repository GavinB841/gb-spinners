import { TestBed } from '@angular/core/testing';

import { GbCircleSpinnerService } from './gb-circle-spinner.service';

describe('GbCircleSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GbCircleSpinnerService = TestBed.get(GbCircleSpinnerService);
    expect(service).toBeTruthy();
  });
});
