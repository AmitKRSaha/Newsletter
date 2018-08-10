import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalNewsletterComponent } from './final-newsletter/final-newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: FinalNewsletterComponent,
    outlet: 'newsletter'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalNewsletterRoutingModule {}
