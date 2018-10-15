import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsShowComponent } from './restaurants-show.component';

describe('RestaurantsShowComponent', () => {
  let component: RestaurantsShowComponent;
  let fixture: ComponentFixture<RestaurantsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
