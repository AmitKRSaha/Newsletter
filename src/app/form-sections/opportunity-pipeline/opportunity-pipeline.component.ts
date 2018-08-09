import { Component, OnInit, Input } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { AcheivementComponent } from '../acheivement/acheivement.component';

@Component({
  selector: 'app-opportunity-pipeline',
  templateUrl: './opportunity-pipeline.component.html',
  styleUrls: ['./opportunity-pipeline.component.css']
})
export class OpportunityPipelineComponent implements OnInit {
  opportunityshoworhide: any;
  @Input() acheivement: AcheivementComponent;
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;

  userFormuserOpportunity = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
  }
  get users(): FormArray {
    return this.userFormuserOpportunity.get('users') as FormArray;
 }

 onFormSubmit() {
  this.completedSections.opportunityInPipeline.status = 'completed';
  this.line.opportunityInPipeline.status = 'completed';
  this.progressBarService.addItemInList([this.userFormuserOpportunity.value]);
  this.progressBarService.additem('opportunity', this.userFormuserOpportunity.value);

  this.opportunityshoworhide = 'hide';
  this.acheivement.toggle('show');
 }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggle(showorhide:  string) {
    this.opportunityshoworhide = showorhide;
  }

  expandMoreOrLess() {
    this.expandtoggle.planningsection.status = (this.expandtoggle.planningsection.status === 'open') ? 'closed' : 'open';
  }

  stateActive() {
    this.completedSections.opportunityInPipeline.status = 'active';
    this.line.opportunityInPipeline.status = 'active';
  }
}
