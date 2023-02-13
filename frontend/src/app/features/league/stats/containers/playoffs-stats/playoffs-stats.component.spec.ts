import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffsStatsComponent } from './playoffs-stats.component';

describe('PlayoffsStatsComponent', () => {
  let component: PlayoffsStatsComponent;
  let fixture: ComponentFixture<PlayoffsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffsStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
