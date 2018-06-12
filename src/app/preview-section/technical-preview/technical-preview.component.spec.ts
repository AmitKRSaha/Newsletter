import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalPreviewComponent } from './technical-preview.component';

describe('TechnicalPreviewComponent', () => {
  let component: TechnicalPreviewComponent;
  let fixture: ComponentFixture<TechnicalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
