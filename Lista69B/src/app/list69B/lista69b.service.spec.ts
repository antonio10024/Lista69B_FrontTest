import { TestBed } from '@angular/core/testing';

import { Lista69bService } from './lista69b.service';

describe('Lista69bService', () => {
  let service: Lista69bService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lista69bService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
