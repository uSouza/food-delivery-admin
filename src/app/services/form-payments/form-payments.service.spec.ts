import { TestBed } from '@angular/core/testing';

import { FormPaymentsService } from './form-payments.service';

describe('FormPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormPaymentsService = TestBed.get(FormPaymentsService);
    expect(service).toBeTruthy();
  });
});
