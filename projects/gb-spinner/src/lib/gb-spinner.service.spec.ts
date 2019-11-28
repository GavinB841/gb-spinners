import { TestBed } from '@angular/core/testing';

import { GbSpinnerService } from './gb-spinner.service';

describe('GbSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GbSpinnerService = TestBed.get(GbSpinnerService);
    expect(service).toBeTruthy();
  });
});
