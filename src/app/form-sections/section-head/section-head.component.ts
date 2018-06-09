import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BusinessUpdateComponent } from '../business-update/business-update.component';

@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.css']
})
export class SectionHeadComponent {
  @Input() businessupdate: BusinessUpdateComponent;
  @Input() completedSections: any;
  @Input() line: any;
  @Input() expandtoggle: any;
  sectionheadtoggle: any = 'show';
  expandOption: any = true;
  constructor() { }

  userFormuserOpportunity = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  showactivestatus() {
    this.completedSections.sectionHead.status = 'active';
    this.line.sectionHead.status = 'active';

  }

  onFormSubmit() {
    this.completedSections.sectionHead.status = 'completed';
    this.line.sectionHead.status = 'completed';
    this.sectionheadtoggle = 'hide';
    this.businessupdate.toggle('show');
  }

  expandMoreOrLess() {
    this.expandtoggle.sectionHead.status = (this.expandtoggle.sectionHead.status === 'open') ? 'closed' : 'open';
  }

}
