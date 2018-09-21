import { TestBed, inject } from '@angular/core/testing';

import { IngredientGroupsService } from './ingredient-groups.service';

describe('IngredientGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientGroupsService]
    });
  });

  it('should be created', inject([IngredientGroupsService], (service: IngredientGroupsService) => {
    expect(service).toBeTruthy();
  }));
});
