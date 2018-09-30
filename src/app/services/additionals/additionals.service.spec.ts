import { TestBed } from '@angular/core/testing';

import { AdditionalsService } from './additionals.service';

describe('AdditionalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdditionalsService = TestBed.get(AdditionalsService);
    expect(service).toBeTruthy();
  });
});
