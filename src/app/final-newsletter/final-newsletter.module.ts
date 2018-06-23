import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalNewsletterRoutingModule } from './final-newsletter-routing.module';
import { FinalNewsletterComponent } from './final-newsletter/final-newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    FinalNewsletterRoutingModule
  ],
  declarations: [FinalNewsletterComponent]
})
export class FinalNewsletterModule { }
