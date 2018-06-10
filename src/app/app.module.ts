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
import { PreviewSectionComponent } from './form-sections/preview-section/preview-section.component';
import { AcheivementComponent } from './form-sections/acheivement/acheivement.component';
import { PlannedComponent } from './form-sections/planned/planned.component';
import { HeaderPreviewComponent } from './preview-section/header-preview/header-preview.component';

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
    PreviewSectionComponent,
    AcheivementComponent,
    PlannedComponent,
    HeaderPreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
