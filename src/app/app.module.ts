import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

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
import { ImageProcessService } from './utility-section/image-process.service';
import { TeamPreviewComponent } from './preview-section/team-preview/team-preview.component';
import { UtilityService } from './utility-section/utility.service';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SafeHtml } from './utility-section/safehtml';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


@NgModule({
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
    SafeHtml,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ],
  providers: [ProgressBarService, ImageProcessService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
