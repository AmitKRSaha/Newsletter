import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarinteaserAnswerComponent } from './barinteaser-answer.component';

describe('BarinteaserAnswerComponent', () => {
  let component: BarinteaserAnswerComponent;
  let fixture: ComponentFixture<BarinteaserAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarinteaserAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarinteaserAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
