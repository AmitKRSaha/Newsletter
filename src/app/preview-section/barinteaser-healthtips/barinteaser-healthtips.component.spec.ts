import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarinteaserHealthtipsComponent } from './barinteaser-healthtips.component';

describe('BarinteaserHealthtipsComponent', () => {
  let component: BarinteaserHealthtipsComponent;
  let fixture: ComponentFixture<BarinteaserHealthtipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarinteaserHealthtipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarinteaserHealthtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
