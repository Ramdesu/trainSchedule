import { TestBed } from '@angular/core/testing';

import { LocalStorageDataChangingService } from './local-storage-data-changing.service';

describe('LocalStorageDataChangingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageDataChangingService = TestBed.get(LocalStorageDataChangingService);
    expect(service).toBeTruthy();
  });
});
