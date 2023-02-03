import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDraftpicksComponent } from './team-draftpicks.component';

describe('TeamDraftpicksComponent', () => {
  let component: TeamDraftpicksComponent;
  let fixture: ComponentFixture<TeamDraftpicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDraftpicksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDraftpicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
