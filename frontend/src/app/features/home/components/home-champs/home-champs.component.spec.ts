import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChampsComponent } from './home-champs.component';

describe('HomeChampsComponent', () => {
  let component: HomeChampsComponent;
  let fixture: ComponentFixture<HomeChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
