import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffstatsListComponent } from './playoffstats-list.component';

describe('PlayoffstatsListComponent', () => {
  let component: PlayoffstatsListComponent;
  let fixture: ComponentFixture<PlayoffstatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffstatsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffstatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
