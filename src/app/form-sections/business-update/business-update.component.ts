import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { OpportunityPipelineComponent } from '../opportunity-pipeline/opportunity-pipeline.component';
import { ProgressBarService } from '../../progress-bar.service';
import { ThrowStmt } from '@angular/compiler';


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
  businessShowOrHide: any = 'hide';
  showorhide: any = 'show';

  constructor(private progressBarService: ProgressBarService) {

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
  // deleteMoreInputBox(index: number) {
  //   this.usersBusiness.removeAt(index);
  // }
  onFormSubmit() {
    //  console.log(this.users.value); // Gives FormArray data
    //  console.log(this.userForm.value); // Gives Complete form data
    //  for (let i = 0; i < this.users.length; i++) {
    //    console.log(this.users.at(i).value);
    //  }
    // this.progressBarService.addInProgressBar('sectionhead');
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
  }

  ngOnInit() {
  }

}
