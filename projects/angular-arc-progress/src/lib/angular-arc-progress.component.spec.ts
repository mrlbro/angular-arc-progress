import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularArcProgressComponent } from './angular-arc-progress.component';

describe('AngularArcProgressComponent', () => {
  let component: AngularArcProgressComponent;
  let fixture: ComponentFixture<AngularArcProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularArcProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularArcProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
