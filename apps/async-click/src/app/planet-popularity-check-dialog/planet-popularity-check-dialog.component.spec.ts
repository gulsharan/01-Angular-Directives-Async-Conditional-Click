import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPopularityCheckDialogComponent } from './planet-popularity-check-dialog.component';

describe('PlanetPopularityCheckDialogComponent', () => {
  let component: PlanetPopularityCheckDialogComponent;
  let fixture: ComponentFixture<PlanetPopularityCheckDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetPopularityCheckDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetPopularityCheckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
