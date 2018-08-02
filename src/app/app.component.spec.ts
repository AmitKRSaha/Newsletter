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

@Component({
  selector: 'container',
  template: `<input type="file"
                    ng2FileSelect
                    [uploader]="uploader"
             />`
})
export class ContainerComponent {
  public get url(): string { return 'localhost:3000'; }
  public uploader: FileUploader = new FileUploader({ url: this.url });
}

describe('AppComponent', () => {
  beforeEach(async(() => {
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
        HttpClientModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect('Welcome to ' + app.title).toEqual('Welcome to Newsletter');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Newsletter');
  }));
});
