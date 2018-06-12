import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderPreviewComponent } from '../app/preview-section/header-preview/header-preview.component';
import { BusinessupdatePreviewComponent } from '../app/preview-section/businessupdate-preview/businessupdate-preview.component';
import { ProjectPreviewComponent } from './preview-section/project-preview/project-preview.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderPreviewComponent },
  { path: 'business', component: BusinessupdatePreviewComponent  },
  { path: 'planned', component: ProjectPreviewComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
