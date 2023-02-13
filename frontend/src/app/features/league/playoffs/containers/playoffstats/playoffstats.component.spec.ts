import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffstatsComponent } from './playoffstats.component';

describe('PlayoffstatsComponent', () => {
  let component: PlayoffstatsComponent;
  let fixture: ComponentFixture<PlayoffstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
