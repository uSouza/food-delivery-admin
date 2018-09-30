import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusShowComponent } from './menus-show.component';

describe('MenusShowComponent', () => {
  let component: MenusShowComponent;
  let fixture: ComponentFixture<MenusShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
