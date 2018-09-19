<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { APP_BASE_HREF } from '@angular/common'

import { AppComponent } from './app.component'
import { AppModule } from './app.module'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppModule],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
        ]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
=======
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'pandeco-admin'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pandeco-admin');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pandeco-admin!');
  }));
});
>>>>>>> 8124e4285a7d208b95bb1cfcf00c5a6ae0e983b8
