import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftLotteryComponent } from './draft-lottery.component';

describe('DraftLotteryComponent', () => {
  let component: DraftLotteryComponent;
  let fixture: ComponentFixture<DraftLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftLotteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
