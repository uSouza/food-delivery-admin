import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientGroupsFormComponent } from './ingredient-groups-form.component';

describe('IngredientGroupsFormComponent', () => {
  let component: IngredientGroupsFormComponent;
  let fixture: ComponentFixture<IngredientGroupsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientGroupsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientGroupsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
