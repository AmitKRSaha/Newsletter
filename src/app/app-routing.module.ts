import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderPreviewComponent } from '../app/preview-section/header-preview/header-preview.component';
import { BusinessupdatePreviewComponent } from '../app/preview-section/businessupdate-preview/businessupdate-preview.component';
import { ProjectPreviewComponent } from './preview-section/project-preview/project-preview.component';
import { TechnicalPreviewComponent } from './preview-section/technical-preview/technical-preview.component';
import { BarinteaserAnswerComponent } from './preview-section/barinteaser-answer/barinteaser-answer.component';
import { BarinteaserHealthtipsComponent } from './preview-section/barinteaser-healthtips/barinteaser-healthtips.component';
import { TeamphotoBirthdayComponent } from './form-sections/teamphoto-birthday/teamphoto-birthday.component';
import { TeamPreviewComponent } from './preview-section/team-preview/team-preview.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderPreviewComponent },
  { path: 'business', component: BusinessupdatePreviewComponent  },
  { path: 'planned', component: ProjectPreviewComponent  },
  { path: 'technical', component: TechnicalPreviewComponent  },
  { path: 'brainteaserAndHealthtips', component: BarinteaserHealthtipsComponent  },
  { path: 'brainteserans', component: BarinteaserAnswerComponent  },
  { path: 'teamimage', component: TeamPreviewComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
