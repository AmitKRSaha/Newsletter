import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalNewsletterComponent } from './final-newsletter.component';

describe('FinalNewsletterComponent', () => {
  let component: FinalNewsletterComponent;
  let fixture: ComponentFixture<FinalNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Final News Letter');
  }));
});
