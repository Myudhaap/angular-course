import { TestBed } from '@angular/core/testing';

import { ItodoService } from './itodo.service';

describe('ItodoService', () => {
  let service: ItodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
