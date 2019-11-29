import { TestBed } from '@angular/core/testing';

import { GbBarSpinnerService } from './gb-bar-spinner.service';

describe('GbBarSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GbBarSpinnerService = TestBed.get(GbBarSpinnerService);
    expect(service).toBeTruthy();
  });
});
