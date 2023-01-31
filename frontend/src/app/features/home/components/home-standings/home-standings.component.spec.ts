import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStandingsComponent } from './home-standings.component';

describe('HomeStandingsComponent', () => {
  let component: HomeStandingsComponent;
  let fixture: ComponentFixture<HomeStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
