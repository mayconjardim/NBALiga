import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxscoreTableComponent } from './boxscore-table.component';

describe('BoxscoreTableComponent', () => {
  let component: BoxscoreTableComponent;
  let fixture: ComponentFixture<BoxscoreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxscoreTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxscoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
