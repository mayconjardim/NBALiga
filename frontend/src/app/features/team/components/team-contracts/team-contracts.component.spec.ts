import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamContractsComponent } from './team-contracts.component';

describe('TeamContractsComponent', () => {
  let component: TeamContractsComponent;
  let fixture: ComponentFixture<TeamContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamContractsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
