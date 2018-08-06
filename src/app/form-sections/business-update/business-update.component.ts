import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OpportunityPipelineComponent } from '../opportunity-pipeline/opportunity-pipeline.component';
import { ProgressBarService } from '../../progress-bar.service';


@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.css']
})
export class BusinessUpdateComponent implements OnInit {

  @Input() opportunityPipeline: OpportunityPipelineComponent;
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;
  @Input() routeactivate: any;
  businessShowOrHide: any = 'hide';
  showorhide: any = 'show';
  path = '';


  constructor(private progressBarService: ProgressBarService, private route: Router,
    private changeDetectorRef: ChangeDetectorRef) {

  }

  userFormBusiness = new FormGroup({
    usersBusiness: new FormArray([
      new FormControl()
    ])
  });

  get usersBusiness(): FormArray {
    return this.userFormBusiness.get('usersBusiness') as FormArray;
  }
  addMoreBusinessInputBox() {
    this.usersBusiness.push(new FormControl());
  }

  onFormSubmit() {

    console.log(JSON.stringify(this.userFormBusiness.value));
    this.progressBarService.addItemInList([this.userFormBusiness.value]);
    this.completedSections.businessupdate.status = 'completed';
    this.line.businessupdate.status = 'completed';
    this.expandtoggle.businessupdate.status = 'closed';
    this.showorhide = '';
    this.opportunityPipeline.toggle('show');
    this.businessShowOrHide = 'hide';
  }

  expandMoreOrLess() {
    this.expandtoggle.businessupdate.status = (this.expandtoggle.businessupdate.status === 'open') ? 'closed' : 'open';
  }

  toggle(showorhide: string) {
    this.businessShowOrHide = showorhide;
  }

  showActive() {
    this.line.businessupdate.status = 'active';
    this.completedSections.businessupdate.status = 'active';
    this.route.navigateByUrl('business');
  }

  ngOnInit() {
  }

}
