import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayoffBracketComponent } from './playoff-bracket.component';

describe('PlayoffBracketComponent', () => {
  let component: PlayoffBracketComponent;
  let fixture: ComponentFixture<PlayoffBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffBracketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
