import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftLotteryListComponent } from './draft-lottery-list.component';

describe('DraftLotteryListComponent', () => {
  let component: DraftLotteryListComponent;
  let fixture: ComponentFixture<DraftLotteryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftLotteryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftLotteryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
