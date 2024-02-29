import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { watchItemResolver } from './watch-item.resolver';

describe('watchItemResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => watchItemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
