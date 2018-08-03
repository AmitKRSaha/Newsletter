import { AppRoutingModule } from './app-routing.module';
import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './app-routing.module';
import { HeaderPreviewComponent } from '../app/preview-section/header-preview/header-preview.component';
import { BusinessupdatePreviewComponent } from '../app/preview-section/businessupdate-preview/businessupdate-preview.component';
import { ProjectPreviewComponent } from './preview-section/project-preview/project-preview.component';
import { TechnicalPreviewComponent } from './preview-section/technical-preview/technical-preview.component';
import { BarinteaserAnswerComponent } from './preview-section/barinteaser-answer/barinteaser-answer.component';
import { BarinteaserHealthtipsComponent } from './preview-section/barinteaser-healthtips/barinteaser-healthtips.component';
import { TeamPreviewComponent } from './preview-section/team-preview/team-preview.component';


describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});

describe('Router: App', () => {

  let location: Location;
  let router: Router;

  // Configure router testing module
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              AppRoutingModule,
              RouterTestingModule.withRoutes(routes)
          ],
          declarations: [
              HeaderPreviewComponent,
              BusinessupdatePreviewComponent,
              ProjectPreviewComponent,
              TechnicalPreviewComponent,
              BarinteaserAnswerComponent,
              BarinteaserHealthtipsComponent,
              TeamPreviewComponent
          ],
          providers: [Location]
      }).compileComponents();

      router = TestBed.get(Router);
      location = TestBed.get(Location);
  });

  // Test for asyncFake
  it('fakeAsync works', fakeAsync(() => {
      const promise = new Promise(resolve => {
          setTimeout(resolve, 10);
      });
      let done = false;
      promise.then(() => done = true);
      tick(50);
      expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /header', fakeAsync(() => {
      const fixture = TestBed.createComponent(HeaderPreviewComponent);
      router.navigateByUrl('');
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('/header');
      const compiled = fixture.debugElement.nativeElement;
      // expect(compiled.querySelector('p').textContent).toContain('dashboard works!');
  }));

  it('navigate to "/header" redirects you to /header', fakeAsync(() => {
    const fixture = TestBed.createComponent(HeaderPreviewComponent);
    router.navigateByUrl('/header');
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/header');
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('p').textContent).toContain('dashboard works!');
}));

  it('navigate to "business" redirects to /business', fakeAsync(() => {
      const fixture = TestBed.createComponent(BusinessupdatePreviewComponent);
      router.navigateByUrl('/business');
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('/business');
      const compiled = fixture.debugElement.nativeElement;
      // expect(compiled.querySelector('p').textContent).toContain('feature works!');
  }));
});
