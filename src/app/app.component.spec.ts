import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { SectionHeadComponent } from './form-sections/section-head/section-head.component';
import { BusinessUpdateComponent } from './form-sections/business-update/business-update.component';
import { OpportunityPipelineComponent } from './form-sections/opportunity-pipeline/opportunity-pipeline.component';
import { ProgressBarService } from './progress-bar.service';
import { ProjectStatisticsComponent } from './form-sections/project-statistics/project-statistics.component';
import { TechnicalArticleComponent } from './form-sections/technical-article/technical-article.component';
import { BrainTeasersComponent } from './form-sections/brain-teasers/brain-teasers.component';
import { HealthyTipsComponent } from './form-sections/healthy-tips/healthy-tips.component';
import { BrainTeaserAnswerComponent } from './form-sections/brain-teaser-answer/brain-teaser-answer.component';
import { AcheivementComponent } from './form-sections/acheivement/acheivement.component';
import { PlannedComponent } from './form-sections/planned/planned.component';
import { HeaderPreviewComponent } from './preview-section/header-preview/header-preview.component';
import { BusinessupdatePreviewComponent } from './preview-section/businessupdate-preview/businessupdate-preview.component';
import { ProjectPreviewComponent } from './preview-section/project-preview/project-preview.component';
import { TechnicalPreviewComponent } from './preview-section/technical-preview/technical-preview.component';
import { BarinteaserHealthtipsComponent } from './preview-section/barinteaser-healthtips/barinteaser-healthtips.component';
import { BarinteaserAnswerComponent } from './preview-section/barinteaser-answer/barinteaser-answer.component';
import { TeamphotoBirthdayComponent } from './form-sections/teamphoto-birthday/teamphoto-birthday.component';
import { TeamPreviewComponent } from './preview-section/team-preview/team-preview.component';



describe('AppComponent', () => {
  let userServiceStub: Partial<ProgressBarService>;
  let progressBarService;

  beforeEach(async(() => {
    userServiceStub = {
      newsletterContent : {'a' : '1'}
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SectionHeadComponent,
    BusinessUpdateComponent,
    OpportunityPipelineComponent,
    ProjectStatisticsComponent,
    TechnicalArticleComponent,
    BrainTeasersComponent,
    HealthyTipsComponent,
    BrainTeaserAnswerComponent,
    AcheivementComponent,
    PlannedComponent,
    HeaderPreviewComponent,
    BusinessupdatePreviewComponent,
    ProjectPreviewComponent,
    TechnicalPreviewComponent,
    BarinteaserHealthtipsComponent,
    BarinteaserAnswerComponent,
    TeamphotoBirthdayComponent,
    TeamPreviewComponent,
      ], imports: [ RouterTestingModule, FormsModule, FileUploadModule,
        ReactiveFormsModule,
        HttpClientModule ],
        providers:    [ {provide: ProgressBarService, useValue: userServiceStub } ]
    }).compileComponents();

  }));

  it('stub object and injected UserService should not be the same', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // UserService from the root injector
    progressBarService = TestBed.get(ProgressBarService);

    expect(userServiceStub === ProgressBarService).toBe(false);

    // Changing the stub object has no effect on the injected service
    // userServiceStub.isLoggedIn = false;
    // expect(userService.isLoggedIn).toBe(true);
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should display a different test title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = 'Test Title';
    fixture.detectChanges();
    expect('Welcome to ' + app.title).toContain('Test Title');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Newsletter');
    expect(compiled.querySelectorAll('div.liner')[0].childElementCount).toBe(10);
  }));
  it('should have 10 divs inside liner div', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('div.liner')[0].childElementCount).toBe(10);
  }));
  it('should have 11 divs inside status div', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('div.status')[0].childElementCount).toBe(11);
  }));
  it('should have divs inside status div with different images', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // tslint:disable-next-line:max-line-length
    expect(compiled.querySelectorAll('div.status')[0].querySelectorAll('div')[0].querySelectorAll('div img')[0].src).toContain('attrition_icon');
  }));
  it('should have other components', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-section-head')).not.toBe(null);
    expect(compiled.querySelector('app-business-update')).not.toBe(null);
    expect(compiled.querySelector('app-opportunity-pipeline')).not.toBe(null);
    expect(compiled.querySelector('app-acheivement')).not.toBe(null);
    expect(compiled.querySelector('app-planned')).not.toBe(null);
    expect(compiled.querySelector('app-project-statistics')).not.toBe(null);
    expect(compiled.querySelector('app-technical-article')).not.toBe(null);
    expect(compiled.querySelector('app-brain-teasers')).not.toBe(null);
    expect(compiled.querySelector('app-healthy-tips')).not.toBe(null);
    expect(compiled.querySelector('app-brain-teaser-answer')).not.toBe(null);
    expect(compiled.querySelector('app-teamphoto-birthday')).not.toBe(null);
  }));
  it('should have router outlet for preview section', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  }));
  it('should have button with Final NewsLetter', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container-finalnewsletter button').textContent).toEqual('Final NewsLetter');
  }));

});
