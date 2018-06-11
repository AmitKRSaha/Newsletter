import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessupdatePreviewComponent } from './businessupdate-preview.component';

describe('BusinessupdatePreviewComponent', () => {
  let component: BusinessupdatePreviewComponent;
  let fixture: ComponentFixture<BusinessupdatePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessupdatePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessupdatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
