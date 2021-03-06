import { Component, OnInit, Input } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OpportunityPipelineComponent } from '../opportunity-pipeline/opportunity-pipeline.component';
import { ProgressBarService } from '../../progress-bar.service';
import { FileUploader } from 'ng2-file-upload';


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
  path = '';
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});

  constructor(private progressBarService: ProgressBarService, private route: Router) {

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

  onFormSubmit(event) {
    if (event.srcElement.offsetParent.children[1].classList.contains('show')) {
      event.srcElement.offsetParent.children[1].classList.remove('show');
    }
    this.progressBarService.additem('business', this.usersBusiness.value);
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

  backgroundImageUpload() {
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addBackgroundImage('business', data.path );
    console.log(data);
}

onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
}

}
